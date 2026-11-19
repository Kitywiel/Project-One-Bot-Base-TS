import { bot } from "../handlers/BotCreateHandler.js";
import { botChatSend } from "../handlers/modules/chat/MessageHandler.js";
import { friendsList } from "../settings/Players/FriendsList.js";
import { botLog } from "../utils/ConsoleBotLog.js";

export function initModulesLeaveAndJoin() {


bot.on('playerJoined', (player: any) => {
  if(friendsList.includes(player.username)){
    botChatSend(`My friend ${player.username} joined the game`)
  }
  botLog(8, `${player.username} Joined The Game`)
})

bot.on('playerLeft', (player: any) => {
  
  botLog(9, `${player.username} Left The Game`)
})
}