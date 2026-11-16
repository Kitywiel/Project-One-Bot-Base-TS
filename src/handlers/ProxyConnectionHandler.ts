import { SocksClient } from "socks";
import { botEnvSettings } from "./BotEnvSettings.js";

function isProxyOn(){
  if (botEnvSettings.proxy.host && botEnvSettings.proxy.port){
    if (!Number.isInteger(botEnvSettings.proxy.port)) return null
    const result = {
      host: botEnvSettings.proxy.host.toString(),
      port: botEnvSettings.proxy.port,
      username: botEnvSettings.proxy.username.toString(),
      password: botEnvSettings.proxy.passcode.toString()
    }
    return result
  }
  else return null
}
const proxy = isProxyOn()

export function proxyConnection(client: any, server: any) {
  if (!proxy){
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