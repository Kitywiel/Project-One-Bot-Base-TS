import { SocksClient } from "socks";
import { botEnvSettings } from "../settings/BotEnvSettings.js";

// auto detects if an proxy is set and returns null if not 
function isProxyOn() {
  if (botEnvSettings.proxy.host && botEnvSettings.proxy.port) {
    if (!Number.isInteger(botEnvSettings.proxy.port)) return null
    const result = {
      host: botEnvSettings.proxy.host?.toString(),
      port: botEnvSettings.proxy.port,
      username: botEnvSettings.proxy.username,
      password: botEnvSettings.proxy.passcode,
    }
    return result
  }
  else return null
}

// declears proxy
const proxy = isProxyOn()

// makes the proxy connection or ditect connection if the proxy is not set
export function proxyConnection(client: any, server: any) {
  if (!proxy) {
    client.setSocket(require('net').connect(server.port, server.host))
    return
  }
  SocksClient.createConnection({
    proxy: {
      host: proxy.host,
      port: proxy.port,
      type: 5,
      userId: proxy.username,
      password: proxy.password
    },
    command: 'connect',
    destination: {
      host: server.host,
      port: server.port
    }
  })
}