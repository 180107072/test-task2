import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "node:path";
import { URL } from "node:url";
import { platform } from "node:process";

const listeners = (window: BrowserWindow) => {
  ipcMain.handle("window:minimize", () => window.minimize());
  ipcMain.handle("window:maximize", () =>
    window.isMaximized() ? window.restore() : window.maximize()
  );
  ipcMain.handle("window:close", () => window.close());
};

async function createWindow() {
  const browserWindow = new BrowserWindow({
    show: false,
    width: 1200,
    height: 600,
    minWidth: 900,
    minHeight: 500,
    frame: platform === "darwin",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      webviewTag: false,
      preload: join(app.getAppPath(), "packages/preload/dist/index.cjs"),
    },
  });

  listeners(browserWindow);

  browserWindow.on("ready-to-show", () => {
    browserWindow?.show();

    if (import.meta.env.DEV) {
      browserWindow?.webContents.openDevTools();
    }
  });

  const pageUrl =
    import.meta.env.DEV && import.meta.env.VITE_DEV_SERVER_URL !== undefined
      ? import.meta.env.VITE_DEV_SERVER_URL
      : new URL(
          "../renderer/dist/index.html",
          "file://" + __dirname
        ).toString();

  await browserWindow.loadURL(pageUrl);

  return browserWindow;
}

export async function restoreOrCreateWindow() {
  let window = BrowserWindow.getAllWindows().find((w) => !w.isDestroyed());

  if (window === undefined) {
    window = await createWindow();
  }

  if (window.isMinimized()) {
    window.restore();
  }

  window.focus();
}
