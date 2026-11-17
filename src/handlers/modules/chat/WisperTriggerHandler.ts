import { bot } from "../../BotCreateHandler.js";
import { sharedMessageHandler } from "./SharedMessageHandler.js";

export function wisperHandler() {
  bot.on('whisper', (username: string, message: string) =>{
    const msg = message.toLowerCase().split(' ')

    // triggers the shared message handler
    sharedMessageHandler(1, username, msg)

  })
}