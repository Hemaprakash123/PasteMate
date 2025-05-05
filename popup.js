document.getElementById("saveBtn").addEventListener("click", () => {
  const sentence = document.getElementById("inputText").value.trim();
  if (sentence) {
    chrome.storage.local.set({ storedSentence: sentence }, () => {
      alert("Sentence saved! Press Alt+C to paste it.");
    });
  } else {
    alert("Please enter a sentence before saving.");
  }
});
