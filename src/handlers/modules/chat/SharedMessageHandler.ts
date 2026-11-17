import { adminList } from "../../../settings/Players/AdminList.js";
import { bot } from "../../BotCreateHandler.js";
import { botWisperSend } from "./MessageHandler.js";

export function sharedMessageHandler(type: number, username: string, msg: string[] ) {
  if (adminList.includes(username)){
      
    // coords message
      if (msg[0] === '$coords') {
        botWisperSend(username, `My Coords Are: ${bot.entity.position.x} ${bot.entity.position.y} ${bot.entity.position.z}`)
      }
    }
}