# Tube2Spot

This is the repository for the firefox extension Tube2Spot, an extension that allows you to effortlessly add songs from YouTube to your Spotify playlists. 
If you like the extension, please feel free to star this repository.

## Demo Video

Here is a demo video of how the extension works:

https://github.com/user-attachments/assets/ac722cc4-5eab-487e-a61d-a0c663c20602


Here are some screenshots of the popup portion of the add-on where you can see your playlists and the song the add-on found:

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
  
4. Go to about:debugging#/runtime/this-firefox.
5. Press "Load Temporary Add-on" and select any file in the src folder which should have the config.js that you created.
6. The add-on should be loaded and you can now start developing!

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
