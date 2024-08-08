// Listener for messages sent from other parts of the extension
chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.message === "activate_icon") {
        // Enables action icon in the toolbar for the current tab 
        chrome.action.enable(sender.tab.id);
    }
});