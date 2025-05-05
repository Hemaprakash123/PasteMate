chrome.commands.onCommand.addListener((command) => {
    if (command === "paste-stored-text") {
      chrome.storage.local.get("storedSentence", (data) => {
        const sentence = data.storedSentence || "";
        
        // Query for the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0].id) {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              function: pasteSentence,
              args: [sentence] // Pass the sentence to the content script
            }).then(() => {
              console.log("Sentence pasted successfully");
            }).catch((error) => {
              console.error("Error executing script:", error);
            });
          }
        });
      });
    }
  });
  
  function pasteSentence(sentence) {
    // Use a function that targets the editable field directly
    const el = document.activeElement;
  
    if (el && (el.tagName === "TEXTAREA" || (el.tagName === "INPUT" && el.type === "text"))) {
      el.focus();
      el.setRangeText(sentence, el.selectionStart, el.selectionEnd, "end");
    } else if (el && el.isContentEditable) {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(sentence));
        range.collapse(false); // move cursor to end
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } else {
      alert("Please click into a text field, input, or editable area first.");
    }
  }
  