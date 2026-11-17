import { bot } from "../../BotCreateHandler.js";

function randomMessage(length: number): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

export function botChatSend(message: string) {
  bot.chat(`${message} [${randomMessage(6)}]`)
}
export function botWisperSend(username: string, message: string) {
  bot.whisper(username, `${message} [${randomMessage(6)}]`)
}