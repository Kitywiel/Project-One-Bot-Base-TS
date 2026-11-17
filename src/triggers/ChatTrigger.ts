import { bot } from "../handlers/BotCreateHandler.js";
import { sharedMessageHandler } from "../handlers/modules/chat/SharedMessageHandler.js";

export function chatHandler() {
  bot.on('chat', (username: string, message: string) => {
    const msg = message.toLowerCase().split(' ')

    // triggers the shared message handler
    sharedMessageHandler(1, username, msg)

  })
}