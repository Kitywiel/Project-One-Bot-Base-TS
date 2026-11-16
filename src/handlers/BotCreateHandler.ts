import mineflayer from 'mineflayer'
import { proxyConnection } from './ProxyConnectionHandler.js'

// checks if the host is an string
function hostCheck(host: any): string {
  return host.toString()
}

// checks if the port is an number and if its can corect port
function portCheck(port: any): number {
  if (!Number.isInteger(port)) throw new Error('port is Not An Number')
  else if (port <= 65535) return port
  else throw new Error('port is Not An Valid Number')
}

// checks if the user name is an correct username
function usernameCheck(username: any): string {
  if (/^[a-zA-Z0-9_]{3,16}$/.test(username)) return username
  else throw new Error('Invalid username');
}

// checks if the given auth is an actual suported auth methet
function authCheck(auth: any) {
  if (auth === 'offline' || auth === 'microsoft' || auth === 'mojang') return auth

  else throw new Error('selected auth is not an valid auth')
}
const settings = {
  host: hostCheck('localhost'),
  port: portCheck(3423)
}

// makes and exports the bot
export const bot = mineflayer.createBot({
  host: settings.host,
  port: settings.port,
  username: usernameCheck('test'),
  auth: authCheck(''),
  connect: (client) =>{
    proxyConnection(client, settings)
  }
})