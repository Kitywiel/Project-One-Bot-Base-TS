import { bot } from "./handlers/BotCreateHandler.js";
import { chatHandler } from "./triggers/ChatTrigger.js";
import { wisperHandler } from "./triggers/WisperTrigger.js";
import { crackedLogingHandler } from "./handlers/modules/CrackedLoginHandler.js";
import { initModules } from "./modules/initModules.js";


crackedLogingHandler()
chatHandler()
wisperHandler()
initModules()


bot.on('messagestr', console.log)

bot.on('error', console.log)
bot.on('end', console.log)
bot.on('kicked', (reason, loggedIn) =>
  console.error('Kicked:', { reason, loggedIn })
)