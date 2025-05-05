chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "paste") {
      const el = document.activeElement;
      console.log("Active element:", el);
  
      // Handle standard textareas or input fields
      if (el && (el.tagName === "TEXTAREA" || (el.tagName === "INPUT" && el.type === "text"))) {
        el.focus();
        el.setRangeText(request.sentence, el.selectionStart, el.selectionEnd, "end");
      }
      // Handle contentEditable elements (like Google Docs)
      else if (el && el.isContentEditable) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          range.insertNode(document.createTextNode(request.sentence));
          range.collapse(false); // move cursor to end
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
      // Google Docs workaround (special handling for contenteditable)
      else if (document.body.contentEditable === "true") {
        const docEditableElement = document.querySelector("div[contenteditable='true']");
        if (docEditableElement) {
          docEditableElement.focus();
          document.execCommand('insertText', false, request.sentence);
        }
      }
      // Fallback for non-editable areas
      else {
        alert("Please click into a text field, input, or editable area first.");
      }
    }
  });
  