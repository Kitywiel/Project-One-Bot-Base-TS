import { botEnvSettings } from "../../settings/BotEnvSettings.js"
import { bot } from "../BotCreateHandler.js";

// base values do not change will cause the login to fail if changed
let loggedIn: boolean = false
let waitingForChat: boolean = false

// login call function
export function crackedLogingHandler(){
  if (loggedIn) return

  bot.physicsEnabled = false

  // message detector
  const interval = setInterval(async() => {
    if(waitingForChat) return
    waitingForChat = true
    
    // waits for an message to be send to the bot
    await bot.once('messagestr', (msg: string) => {
      if (loggedIn) return

      // login command detectors
      if (msg.toLowerCase().includes('login')) bot.chat(`/login ${botEnvSettings.mc.password}`);
      else if (msg.toLowerCase().includes('register')) bot.chat(`/register ${botEnvSettings.mc.password} ${botEnvSettings.mc.password}`);
      
        // detects the logged in message on 10b10t
      else if (msg.toLowerCase().includes('logged in')) {
        // stops the login loop
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