import { bot } from "../handlers/BotCreateHandler.js";
import { botChatSend } from "../handlers/modules/chat/MessageHandler.js";
import { friendsList } from "../settings/Players/FriendsList.js";
import { botLog } from "../utils/ConsoleBotLog.js";

bot.on('playerJoined', (player: any) => {
  if(friendsList.includes(player)){
    botChatSend(`My friend ${player} joined the game`)
  }
  botLog(8, `${player} Joined The Game`)
})

bot.on('playerLeft', (player: any) => {
  
  botLog(9, `${player} Left The Game`)
})