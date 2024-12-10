// chrome.action.onClicked.addListener((tab) => {
//   console.log(tab)
//   // 在用户点击扩展图标时注入脚本
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["content.js"]
//   });
// });

// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['popup.js']
  });
});

// document.getElementById("changeValue").addEventListener("click", async () => {
//   console.log(123)
//   // 向当前活动页面发送消息
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const activeTab = tabs[0];
//     chrome.scripting.executeScript(
//       {
//         target: { tabId: activeTab.id },
//         files: ["popup.js"]
//       },
//       () => {
//         console.log("Content script injected.");
//       }
//     );
//   });
// });
