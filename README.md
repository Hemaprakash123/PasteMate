# PasteMate Chrome Extension

## 📋 Overview

**PasteMate Shortcut** is a simple and powerful Chrome extension that allows users to save a sentence or text and quickly paste it into any text field (like input fields, text areas, or contenteditable elements) using a keyboard shortcut (Alt + C). This is designed to enhance productivity by automating text-pasting without needing to manually use the clipboard every time.

---

## ⚡ Features

- **Easy Keyboard Shortcut**: Paste your stored sentence into any text area by pressing **Alt + C**.
- **Universal Compatibility**: Works on websites like ChatGPT, YouTube, Google Docs, and other input fields or editable areas.
- **Simple Setup**: No complex configurations, just install and start using!
- **Non-Intrusive**: Does not display ads and ensures a clean user experience.

---

## 🛠 Installation
1. Clone the repository or download the ZIP:
2.Open Chrome and go to Extensions:
  Type chrome://extensions in the address bar and press Enter.
  Enable Developer mode at the top right.
  Click Load unpacked and select the folder where the extension is saved.



⌨️ Usage
After installation, click on the extension icon in the Chrome toolbar.

Copy the text you want to store.

Press Alt + C (or the defined shortcut).

The stored sentence will be pasted at the cursor position in any editable text field.

🚀 How It Works
The extension listens for the Alt + C keyboard shortcut and triggers a background script that retrieves the stored sentence from Chrome's local storage.

The content script then pastes the text into the active text field, whether it’s a textarea, input, or a contenteditable element.

💡 Future Enhancements
Customizable Shortcuts: Allow users to set their own keyboard shortcut for pasting text.

Multiple Stored Sentences: Store multiple sentences and cycle through them with different shortcuts.

Text Formatting Options: Optionally allow pasting formatted or rich text.

🏗️ Contributing
Feel free to contribute! Whether it’s fixing a bug, suggesting an enhancement, or providing feedback, your contributions are welcome!

Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-name).

Create a new Pull Request.
