const openBtn = document.querySelector("#openBtn");

openBtn.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = encodeURIComponent(tab?.url || "");
  chrome.tabs.create({ url: `http://localhost:4173/?url=${url}` });
});
