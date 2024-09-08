(function() {
    window.oauth2 = {

        // OAuth2 configuration parameters
        access_token_url: "https://accounts.spotify.com/api/token",
        authorization_url: "https://accounts.spotify.com/authorize",
        client_id: config.id,
        client_secret: config.secret, // check readme for details on how to set this up
        redirect_url: "https://www.youtube.com",
        scopes: ["user-library-modify", "playlist-read-private", "playlist-modify-public", "playlist-modify-private"],
        token: '',

        /**
         * Starts the authorization process by redirecting the user to the authorization URL.
         */
        start: function() {
            window.close();
            var scopeString = this.scopes.join(' ');
            var url = this.authorization_url + "?client_id=" + this.client_id + "&redirect_uri=" + this.redirect_url + "&scope=" + scopeString + "&response_type=code";
            chrome.tabs.create({url: url, active: true});
        },

        /**
         * Finishes the OAuth2 process by exchanging the authorization code for an access token.
         * The access token is then saved to Chrome's local storage. If there's an error, the authorization tab is closed.
         * 
         * @param {string} url - The URL of the redirect page containing the authorization code.
         */
        finish: function(url) {

            // Helper function to remove the active tab
            function removeTab() {
                chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
                    chrome.tabs.remove(tabs[0].id);
                });
            };

            // Check for an error in the redirect URL
            if (url.match(/\?error=(.+)/)) {
                removeTab();
            } else {
                // Extract the authorization code from the URL
                var code = url.match(/\?code=([\w\/\-]+)/)[1];
                console.log(code);

                var data = "grant_type=authorization_code&code=" + code + "&redirect_uri=" + this.redirect_url;
                sendAuthTokenRequest(data);
            }

            /**
             * Sends a request to exchange the authorization code for an access token.
             * 
             * @param {string} data - The request payload containing the authorization code.
             */
            function sendAuthTokenRequest(data) {
                var xhr = new XMLHttpRequest();

                xhr.addEventListener('readystatechange', function(event) {
                    if (xhr.readyState === 4) { // Request is complete
                        if (xhr.status === 200) { // Success
                            if (xhr.responseText.match(/error=/)) {
                                removeTab();
                            } else {
                                // Parse JSON response
                                var jsonResponse = JSON.parse(xhr.responseText);
                                token = jsonResponse.access_token;
                                var obj = { 'token': token };

                                // Store the token in Chrome's local storage
                                chrome.storage.local.set(obj, function() {
                                    console.log('OAuth Token saved');
                                });
                                removeTab();
                            }
                        } else { // Error
                            removeTab();
                        }
                    }
                });

                // Prepare and send the POST request for the access token
                xhr.open('POST', window.oauth2.access_token_url, true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var base64credentials = btoa(window.oauth2.client_id + ":" + window.oauth2.client_secret);
                xhr.setRequestHeader('Authorization', 'Basic ' + base64credentials);
                xhr.send(data);
            }
        },

        /**
         * Clears the authorization token from Chrome's local storage.
         */
        clearToken: function() {
            chrome.storage.local.remove("token", function() {
                console.log("Token Cleared");
            });
        }
    }
})();
