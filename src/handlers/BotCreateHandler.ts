import mineflayer from 'mineflayer'
import { proxyConnection } from './ProxyConnectionHandler.js'
import { botEnvSettings } from '../settings/BotEnvSettings.js'

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

// setting for the bot
const settings = {
  host: hostCheck(botEnvSettings.mc.host),
  port: portCheck(botEnvSettings.mc.port),
  auth: authCheck(botEnvSettings.mc.auth),
  username: usernameCheck(botEnvSettings.mc.username)
}

// makes and exports the bot
export const bot = mineflayer.createBot({
  host: settings.host,
  port: settings.port,
  username: settings.username,
  auth: settings.auth,
  connect: (client) => {
    proxyConnection(client, settings)
  }
})