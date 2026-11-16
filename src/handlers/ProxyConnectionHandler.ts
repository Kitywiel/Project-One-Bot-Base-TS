import { SocksClient } from "socks";
import { botEnvSettings } from "../settings/BotEnvSettings.js";
import net from 'net'

function checkIfSet(test: string | undefined): string | undefined {
  const trimmed = test?.trim()
  return trimmed || undefined
}

// auto detects if an proxy is set and returns null if not 
function isProxyOn() {
  if (botEnvSettings.proxy.host && botEnvSettings.proxy.port) {
    if (!Number.isInteger(botEnvSettings.proxy.port)) return null
    const result = {
      host: botEnvSettings.proxy.host?.toString(),
      port: botEnvSettings.proxy.port,
      username: checkIfSet(botEnvSettings.proxy.username),
      password: checkIfSet(botEnvSettings.proxy.passcode),
    }
    return result
  }
  else return null
}

// botEnvSettings.proxy.username

// declears proxy
const proxy = isProxyOn()

// makes the proxy connection or ditect connection if the proxy is not set
export function proxyConnection(client: any, server: any) {
  if (!proxy) {
    client.setSocket(net.connect(server.port, server.host))
    return
  }
  SocksClient.createConnection({
    proxy: {
      host: proxy.host,
      port: proxy.port,
      type: 5,
      ... (proxy.username ? { userId: proxy.username } : {}),
      ... (proxy.password ? { password: proxy.password } : {})
    },
    command: 'connect',
    destination: {
      host: server.host,
      port: server.port
    }
  })
  .then(({ socket }) => client.setSocket(socket))
  .catch((error) => client.emit("error", error))
}

