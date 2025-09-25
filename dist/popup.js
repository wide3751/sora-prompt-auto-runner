// ========== 會被注入的函式們 ==========

// 注入到頁面的 Runner，會自動依序送出 prompts
function injectedRunner(prompts, TEXTAREA_XPATH, SUBMIT_BUTTON_XPATH, verbose) {
  function getElementByXPath(path) {
    try {
      return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue || null;
    } catch (e) {
      console.error("XPath 錯誤：", path, e);
      return null;
    }
  }

  function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, "value")?.set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;

    if (!valueSetter || !prototypeValueSetter) {
      element.value = value;
    } else if (valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }

    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
  }

  const log = (...args) => verbose && console.log("[SoraPromptAutoRunner]", ...args);

  if (window.__promptAutomationInterval) {
    clearInterval(window.__promptAutomationInterval);
    window.__promptAutomationInterval = null;
  }
  window.__promptAutomationState = { index: 0, waitingClear: false };

  log("✅ 自動化腳本啟動");
  log(`共有 ${prompts.length} 個提示詞`);

  window.__promptAutomationInterval = setInterval(() => {
    const state = window.__promptAutomationState;

    if (state.index >= prompts.length) {
      log("🎉 全部提示詞已送出，停止。");
      clearInterval(window.__promptAutomationInterval);
      window.__promptAutomationInterval = null;
      return;
    }

    const textarea = getElementByXPath(TEXTAREA_XPATH);
    const submitButton = getElementByXPath(SUBMIT_BUTTON_XPATH);

    if (!textarea || !submitButton) {
      console.error("❌ 找不到 textarea 或 submit button，請檢查 XPath。停止。");
      clearInterval(window.__promptAutomationInterval);
      window.__promptAutomationInterval = null;
      return;
    }

    const isTextareaEmpty = (textarea.value ?? "").trim() === "";

    if (state.waitingClear) {
      if (isTextareaEmpty) {
        log(`✅ 第 ${state.index + 1} 個提示詞送出成功，輸入框已清空。`);
        state.index++;
        state.waitingClear = false;
      } else {
        log(`⏳ 等待清空中... 再點一次送出以防漏觸發`);
        submitButton.click();
      }
    } else {
      if (isTextareaEmpty) {
        const promptToSubmit = prompts[state.index];
        log(`🚀 準備送出第 ${state.index + 1}/${prompts.length} 個提示詞`);
        try {
            if (typeof promptToSubmit === "string") {
              setNativeValue(textarea, promptToSubmit);
            } else {
              setNativeValue(textarea, JSON.stringify(promptToSubmit, null, 2));
            }
        } catch (e) {
          console.error("❌ 無法序列化或寫入 prompt：", e, promptToSubmit);
          clearInterval(window.__promptAutomationInterval);
          window.__promptAutomationInterval = null;
          return;
        }
        setTimeout(() => {
          submitButton.click();
          log("🖱️ 已點擊送出");
          state.waitingClear = true;
        }, 500);
      } else {
        log("⚠️ 輸入框非空且未在等待清空；等待手動清空或網站處理完成。");
      }
    }
  }, 2000);
}

// 停止任務
function injectedStopper() {
  if (window.__promptAutomationInterval) {
    clearInterval(window.__promptAutomationInterval);
    window.__promptAutomationInterval = null;
    console.log("[SoraPromptAutoRunner] ⏹️ 已停止");
  } else {
    console.log("[SoraPromptAutoRunner] 沒有正在執行的任務");
  }
}

// ========== popup.js 主邏輯 ==========

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  const promptsEl = $("prompts");
  const textareaXPathEl = $("textareaXPath");
  const submitXPathEl = $("submitXPath");
  const logVerboseEl = $("logVerbose");
  const startBtn = $("start");
  const stopBtn = $("stop");
  const insertExampleBtn = $("insertExample");
  const status = $("status");

  if (!promptsEl || !textareaXPathEl || !submitXPathEl || !logVerboseEl || !startBtn || !stopBtn || !insertExampleBtn || !status) {
    console.error("[Popup] 缺少必要的 DOM 元素，請檢查 popup.html 的 id 是否一致");
    return;
  }

  // 初始化：從 storage 載入設定
  (async function init() {
    try {
      const saved = await chrome.storage.local.get(["prompts", "textareaXPath", "submitXPath", "verbose"]);
      if (saved.prompts) promptsEl.value = saved.prompts;
      if (saved.textareaXPath) textareaXPathEl.value = saved.textareaXPath;
      if (saved.submitXPath) submitXPathEl.value = saved.submitXPath;
      logVerboseEl.checked = !!saved.verbose;
    } catch (e) {
      status.className = "error";
      status.textContent = `初始化失敗：${e.message}`;
    }
  })();

  // 插入範例按鈕
  insertExampleBtn.addEventListener("click", () => {
    const examplePrompts = [
      {
        "scene": "一個寧靜的日式庭院，櫻花飄落",
        "shot": {
          "type": "wide shot",
          "camera_movement": "slow pan",
          "duration": "5 seconds"
        },
        "style": "cinematic, soft lighting"
      },
      {
        "scene": "現代都市夜景，霓虹燈閃爛",
        "shot": {
          "type": "drone shot",
          "camera_movement": "rising up",
          "duration": "8 seconds"
        },
        "style": "cyberpunk, vibrant colors"
      },
      "簡單的文字提示詞範例"
    ];
    
    promptsEl.value = JSON.stringify(examplePrompts, null, 2);
    status.className = "ok";
    status.textContent = "✅ 已插入範例提示詞";
    setTimeout(() => {
      status.className = "";
      status.textContent = "";
    }, 2000);
  });

  // Start 按鈕
  startBtn.addEventListener("click", async () => {
    status.className = "";
    status.textContent = "";
    const promptsRaw = promptsEl.value.trim();
    const textareaXPath = textareaXPathEl.value.trim();
    const submitXPath = submitXPathEl.value.trim();
    const verbose = logVerboseEl.checked;

    if (!promptsRaw || !textareaXPath || !submitXPath) {
      status.className = "error";
      status.textContent = "❌ 請填齊 Prompts 與兩個 XPath。";
      return;
    }

    let prompts;
    try {
      prompts = JSON.parse(promptsRaw);
      if (!Array.isArray(prompts)) throw new Error("prompts 不是陣列");
    } catch (e) {
      status.className = "error";
      status.textContent = `❌ Prompts JSON 解析失敗：${e.message}`;
      return;
    }

    await chrome.storage.local.set({ prompts: promptsRaw, textareaXPath, submitXPath, verbose });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) {
      status.className = "error";
      status.textContent = "❌ 找不到目前分頁。";
      return;
    }

    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: injectedRunner,
        args: [prompts, textareaXPath, submitXPath, verbose],
        world: "MAIN"
      });
      status.className = "ok";
      status.textContent = "🚀 已啟動。開啟該頁 Console 觀察日誌。";
    } catch (e) {
      status.className = "error";
      status.textContent = `❌ 注入失敗：${e.message}`;
    }
  });

  // Stop 按鈕
  stopBtn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) {
      status.className = "error";
      status.textContent = "❌ 找不到目前分頁。";
      return;
    }
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: injectedStopper
      });
      status.className = "ok";
      status.textContent = "⏹️ 停止指令已送出。";
    } catch (e) {
      status.className = "error";
      status.textContent = `❌ 停止失敗：${e.message}`;
    }
  });
});
// ========== popup.js 主邏輯 ==========