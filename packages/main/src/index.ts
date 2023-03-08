import { app } from "electron";
import { restoreOrCreateWindow } from "/@/mainWindow";
import { platform } from "node:process";

import "./security-restrictions";

const isSingleInstance = app.requestSingleInstanceLock();

if (!isSingleInstance) {
  app.quit();
  process.exit(0);
}

app.on("second-instance", restoreOrCreateWindow);

app.disableHardwareAcceleration();

app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", restoreOrCreateWindow);

app
  .whenReady()
  .then(restoreOrCreateWindow)
  .catch((e) => console.error("Failed create window:", e));
