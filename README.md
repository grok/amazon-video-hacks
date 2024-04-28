# Remove Amazon Video X-ray Overlay

This simple JavaScript snippet is designed for viewers who want to remove the "X-ray" overlay feature on Amazon Video, which can be obtrusive or unwanted during viewing. You can quickly implement this solution by pasting it into your browser's developer tools console.

## Why Remove the X-ray Overlay?
The X-ray feature on Amazon Video provides actor biographies, trivia, and other information as overlays on videos. While some might find this feature enriching, others might find it distracting. This script offers a way to watch videos without these interruptions.

## Example Results

| Before      | After       |
|-------------|-------------|
| ![image](https://github.com/grok/amazon-video-hacks/assets/495761/4587a710-30b8-4d4d-a7d0-95c3d9c03317) | ![image](https://github.com/grok/amazon-video-hacks/assets/495761/ba600d70-1998-4778-8de5-ab97a5a41af5) |

## How to Use
To use this snippet, you need to access the developer tools in your web browser. Here's a quick guide on how to do it:

### Step 1: Open Developer Tools
- **Google Chrome or Microsoft Edge**: Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)
- **Mozilla Firefox**: Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)
- **Safari**: First, enable the Develop menu by going to Safari > Preferences > Advanced and checking "Show Develop menu in menu bar". Then press `Cmd+Option+I`.

### Step 2: Navigate to the Console Tab
Once the developer tools are open, click on the "Console" tab to access the JavaScript console.

### Step 3: Paste and Execute the JavaScript
Copy the following JavaScript function and paste it into the console, then press Enter:

```javascript
function removeElementsByClass(className) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
}

// Immediately runs the code defined above.
removeElementsByClass('xrayQuickView');
```

This script will immediately remove all elements with the class xrayQuickView, which is used for the X-ray overlays on Amazon Video.

## Disclaimer
This script is provided as is for educational purposes and to enhance personal viewing experiences. Please consider the terms of service for any platform, including Amazon Video, before modifying your viewing experience.

# Contribution
Contributions to this project are welcome! If you have improvements or other ways to enhance the viewing experience on this streaming platform, feel free to fork this project or submit a pull request.
