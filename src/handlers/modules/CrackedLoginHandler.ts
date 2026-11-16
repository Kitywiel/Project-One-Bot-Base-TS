import { botEnvSettings } from "../../settings/BotEnvSettings.js"
import { bot } from "../BotCreateHandler.js";

// base values do not change will cause the login to fail if changed
let loggedIn: boolean = false
let waitingForChat: boolean = false

export function crackedLogingHandler(){
  if (loggedIn) return

  bot.physicsEnabled = false

  const interval = setInterval(async() => {
    if(waitingForChat) return
    waitingForChat = true
    await bot.once('messagestr', (msg: string) => {
      if (loggedIn) return
      if (msg.toLowerCase().includes('login')) {
        bot.chat(`/login ${botEnvSettings.mc.password}`)
        
      }
      if (msg.toLowerCase().includes('register')) bot.chat(`/register ${botEnvSettings.mc.password} ${botEnvSettings.mc.password}`)
      if (msg.toLowerCase().includes('logged in')) {
        clearInterval(interval)
        loggedIn = true
        setTimeout(() => {
          bot.physicsEnabled = true
        }, 1000);        
      }
    waitingForChat = false
    })
  }, 50);
}