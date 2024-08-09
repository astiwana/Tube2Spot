// Send a message to the background script to activate the extension's icon
chrome.runtime.sendMessage({ message: "activate_icon"});