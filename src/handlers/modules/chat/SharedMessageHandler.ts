import { autoTotemMainhandModule } from "../../../modules/main/AutoTotemMainhandModule.js";
import { autoTotemModule } from "../../../modules/main/AutoTotemOffhandModule.js";
import { adminList } from "../../../settings/Players/AdminList.js";
import { botLog } from "../../../utils/ConsoleBotLog.js";
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
    if (msg[0] === '$mt') {
      const stat = autoTotemMainhandModule.toggle()
      botLog(5, `mainhand totem: ${stat}`)
      if (type === 0) {
        botWisperSend(username, `mainhand totem: ${stat}`)
      } else {
        botChatSend(`mainhand totem: ${stat}`)
      }
    }
    if (msg[0] === '$ot') {
      const stat = autoTotemModule.toggle()
      botLog(5, `offhand totem: ${stat}`)
      if (msg[1] === 'stopint')
      if (type === 0) {
        botWisperSend(username, `offhand totem: ${stat}`)
      } else {
        botChatSend(`offhand totem: ${stat}`)
      }
    }

  }
}