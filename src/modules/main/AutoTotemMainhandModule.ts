import { bot } from "../../handlers/BotCreateHandler.js";
import { botLog } from "../../utils/ConsoleBotLog.js";

let enabled: boolean = true;
let equiping: boolean = false;
let waiting: number = 0;
let interval: ReturnType<typeof setInterval> | null = null;

export const autoTotemMainhandModule = {
    toggle:() => {
    enabled = !enabled
    return enabled
  },
  enable:() => {
    enabled = true
  },
  disable:() => {
    enabled = false
  },
  int:() => {
    interval = setInterval(async () => {
      if (!enabled || equiping) return;

      if (waiting > 0) {
        waiting--;
        return;
      }

      if (bot.health > 20) {
        bot.setQuickBarSlot(0);
        return;
      }

      const mainhand = bot.inventory.slots[44];

      if (mainhand?.name === 'totem_of_undying') {
        bot.setQuickBarSlot(8);
        return;
      }
      
      equiping = true;

      try {
        const totem = bot.inventory.items().find(
          item => item.name === 'totem_of_undying'
        );
      
        if (!totem) {
          botLog(6, 'No Totems Found, waiting 10 seconds');
          waiting = 200;
          return;
        }
      
        await bot.moveSlotItem(totem.slot, 44);
      
        bot.setQuickBarSlot(8);
      
        botLog(5, 'Emergency Totem Ready');
      
      } catch (err) {
        botLog(7, `Totem error: ${err}`);
      } finally {
        equiping = false;
      }
    }, 25);
  },
  stopint:() => {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }
}