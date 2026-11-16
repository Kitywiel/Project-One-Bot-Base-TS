import { bot } from "./handlers/BotCreateHandler.js";
import { crackedLogingHandler } from "./handlers/modules/CrackedLoginHandler.js";
import { botEnvSettings } from "./settings/BotEnvSettings.js";

if (botEnvSettings.mc.auth !== 'microsoft' || 'mojang') {
  crackedLogingHandler()
}


bot.on('error', console.log)
bot.on('end', console.log)