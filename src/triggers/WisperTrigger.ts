import { bot } from "../handlers/BotCreateHandler.js";
import { sharedMessageHandler } from "../handlers/modules/chat/SharedMessageHandler.js";

export function wisperHandler() {
  bot.on('whisper', (username: string, message: string) => {
    const msg = message.toLowerCase().split(' ')

    // triggers the shared message handler
    sharedMessageHandler(0, username, msg)

  })
}