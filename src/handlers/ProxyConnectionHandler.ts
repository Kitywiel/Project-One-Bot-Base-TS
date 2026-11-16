import { SocksClient } from "socks";

const proxyhost = 't'
const proxyport = 3423
const proxyusername =''
const proxypassword =''

function isProxyOn(){
  if (proxyhost && proxyport){
    if (!Number.isInteger(proxyport)) throw new Error()
    const result = {
      host: proxyhost.toString(),
      port: proxyport,
      username: proxyusername.toString(),
      password: proxypassword.toString()
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