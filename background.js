"use strict";

const MENU_ID = "search-on-letterboxd";
const SEARCH_PREFIX = "https://letterboxd.com/search/";

// Register the menu on first install and whenever the extension is updated.
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: MENU_ID,
      title: "Search on Letterboxd",
      contexts: ["selection"],
    });
  });
});

// A click opens the search results for the selected text in a new tab.
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== MENU_ID || !info.selectionText) return;

  const query = info.selectionText.trim().replace(/\s+/g, " ");
  if (!query) return;

  chrome.tabs.create({
    url: `${SEARCH_PREFIX}${encodeURIComponent(query)}/`,
  });
});
