import { bot } from "./handlers/BotCreateHandler.js";
import { crackedLogingHandler } from "./handlers/modules/CrackedLoginHandler.js";
import { initModules } from "./modules/initModules.js";


crackedLogingHandler()
initModules()

bot.on('messagestr', console.log)

bot.on('error', console.log)
bot.on('end', console.log)
bot.on('kicked', (reason, loggedIn) =>
  console.error('Kicked:', { reason, loggedIn })
)