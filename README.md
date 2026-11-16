# Letterboxd Quick Search

A tiny extension for Chromium-based browsers. Highlight text on a webpage, right-click, and choose **Search on Letterboxd** to search across Letterboxd in a new tab.

## Installation (Chromium-based browsers)

1. Download and **extract** the ZIP file to a folder you plan to keep.
2. Open your browser's extensions management page.
3. Enable **Developer mode** (its location may vary depending on the browser).
4. Click **Load unpacked** (or the equivalent option).
5. Select the extracted folder containing `manifest.json`.
6. The extension is now installed and ready to use. No browser restart is necessary.

**Important:** Keep the extracted folder in its original location after installation. Moving or deleting it may prevent the browser from loading the extension.

## Use

1. Highlight text on a webpage, such as `Jaws`.
2. Right-click the selection and choose **Search on Letterboxd**.
3. Letterboxd opens the general search results in a new tab, where you can filter by films, reviews, lists, members and other categories.

The extension works on normal webpages where the browser exposes text selection to extension context menus. Some browser-internal pages and protected interfaces do not support extension context menus.

## What it does (and does not do)

- It only requests the `contextMenus` permission.
- It does not read all your browsing data or inject scripts into webpages.
- It does not track you, store selected text, or contact any external service itself.
- It opens `https://letterboxd.com/search/<encoded selected text>/` in a new tab when you click the menu item.
- No Letterboxd API key or login is needed to use search.

## Files

- `manifest.json` - declares Manifest V3 and the context menu permission.
- `background.js` - registers the menu and opens the search tab.
- `icons/` - original icons for the extension manager.
