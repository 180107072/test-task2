/**
 * @module preload
 */

import { BrowserWindow, contextBridge, ipcRenderer } from "electron";
import { platform } from "node:process";

export const minimize = () => ipcRenderer.invoke("window:minimize");
export const close = () => ipcRenderer.invoke("window:close");
export const maximize = () => ipcRenderer.invoke("window:maximize");
export const isMac = () => platform === "darwin";
