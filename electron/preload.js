// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  on: (channel, callback) => ipcRenderer.on(channel, (_event, ...args) => callback(...args)),
});