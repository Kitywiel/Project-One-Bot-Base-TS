import { bot } from "./handlers/BotCreateHandler.js";
import { chatHandler } from "./triggers/ChatTrigger.js";
import { wisperHandler } from "./triggers/WisperTrigger.js";
import { crackedLogingHandler } from "./handlers/modules/CrackedLoginHandler.js";
import { initModules } from "./modules/initModules.js";
import { initModulesLeaveAndJoin } from "./triggers/JoinAndLeaveTrigger.js";


crackedLogingHandler()
bot.once('spawn',() =>{
  chatHandler()
wisperHandler()
initModules()
initModulesLeaveAndJoin()
})

bot.on('error', console.log)
bot.on('end', console.log)
bot.on('kicked', (reason, loggedIn) =>
  console.error('Kicked:', { reason, loggedIn })
)