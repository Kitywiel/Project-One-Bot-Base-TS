import { adminList } from "../../../settings/Players/AdminList.js";
import { bot } from "../../BotCreateHandler.js";
import { botChatSend, botWisperSend } from "./MessageHandler.js";

export function sharedMessageHandler(type: number, username: string, msg: string[]) {
  if (adminList.includes(username)) {

    // coords message
    if (msg[0] === '$coords') {
      botWisperSend(username, `My Coords Are: ${bot.entity.position.x} ${bot.entity.position.y} ${bot.entity.position.z}`)
    }
    if (msg[0] === '$hi') {
      if (type === 0) {
        botWisperSend(username, 'Hi how are you today')
      } else {
        botChatSend('Hi how are you today')
      }
    }
    if (msg[0] === '$say') {
      botChatSend(msg.slice(1).join(' '))
    }
    if (msg[0] === '$ping') {
      botChatSend(`My Ping Is: ${bot.player.ping}ms`)
    }
  }
}