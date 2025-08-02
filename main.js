const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, "src", "renderer.js"),
      nodeIntegration: true,
      contextIsolation: false, // OK for local apps
      // No preload needed for this simple use case
    },
  });

  // win.loadFile("dist/index.html");
  win.loadFile(path.join(__dirname, "src", "index.html"));

  win.setMenuBarVisibility(false); // ✅ Use the correct variable name

  win.on("closed", () => {
    // Not necessary unless you're reusing the variable
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
