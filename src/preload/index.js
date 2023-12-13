import { contextBridge, ipcRenderer, desktopCapturer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.

//判断是否开启了渲染进程的预渲染上下文隔离

if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', {
            ...electronAPI,
            openVideo() {
                return ipcRenderer.invoke('openVideo')
            }
        }) //这里直接将electron的部分api暴露给了渲染进程实际上也是不安全的
        contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
        console.error(error)
    }
} else {
    window.electron = {
        ...electronAPI,
        openVideo() {
            return ipcRenderer.invoke('openVideo')
        }
    } //这里直接将electron的部分api暴露给了渲染进程实际上也是不安全的
    window.api = api
}
