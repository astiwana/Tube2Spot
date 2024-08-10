/**
 * This script is injected into the OAuth2 redirect URL to handle the redirection
 * and initiate the OAuth2 process.
 *
 * It modifies the current page's URL to append the query parameters needed for 
 * the OAuth2 authorization process and redirects to the OAuth2 authorization page.
 */
window.location = chrome.runtime.getURL('libs/oauth/oauth2.html') + window.location.href.substring(window.location.href.indexOf('?'));
