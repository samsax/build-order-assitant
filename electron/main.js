const { app, BrowserWindow, screen, globalShortcut } = require("electron");
const path = require("path");

let win;

function createWindow() {
  const { width: screenWidth } = screen.getPrimaryDisplay().workAreaSize;
  win = new BrowserWindow({
    width: 300,
    height: 600,
    x: screenWidth - 300,
    y: 50,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    focusable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // si lo usas
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.setAlwaysOnTop(true, "screen-saver");
  win.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  createWindow();

  // ⌨️ Atajos de teclado globales
  globalShortcut.register("F6", () => {
    win.webContents.send("start-build-order");
  });

  globalShortcut.register("F7", () => {
    win.webContents.send("pause-build-order");
  });

  globalShortcut.register("F8", () => {
    win.webContents.send("next-step");
  });

  globalShortcut.register("F9", () => {
    win.webContents.send("reset-build-order");
  });
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
