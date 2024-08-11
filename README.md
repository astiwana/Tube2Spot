# Tube2Spot

This is the repository for the browser extension Tube2Spot, an extension that allows you to effortlessly add songs from YouTube to your Spotify playlists. 
If you like the extension, please feel free to star this repository.

## Demo Video

Here is a demo video of how the extension works:

https://github.com/user-attachments/assets/418bb270-7b5d-4fd5-a1fa-9384c9f63704


Here are some screenshots of the popup portion of the extension where you can see your playlists and the song the extension found:

![Screenshot 1](https://github.com/user-attachments/assets/7c4d465f-08cf-410e-8b1a-54b0f7a4310b)
![Screenshot 2](https://github.com/user-attachments/assets/84ea3fcb-732f-4f86-a886-aaeada088c9a)

## Contributing 

To contribute to this repository, feel free to make a pull request and I will try my best to review it soon.

### Installation 

1. First, fork this repository and clone it to your computer.
2. Create a new app in the Spotify developer dashboard. Set the redirect URI to https://www.youtube.com and request web API. Copy and save the client ID and client secret.
3. In the src folder, create config.js and enter your API keys in an object like this:
    **var config = {
    id : 'client_id',
    secret : 'client_secret'
  }**
  
4. Go to chrome://extensions and enable developer mode.
5. Press "load unpacked" and select the src folder which should have the config.js that you created.
6. The extension should be loaded and you can now start developing!
