import { bot } from "../../handlers/BotCreateHandler.js";
import { botLog } from "../../utils/ConsoleBotLog.js";

let enabled: boolean = false;
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
    interval = setInterval(async() => {
      if (waiting > 0) {
        waiting--
        return
      }
      if (equiping) return
      if (bot.health > 10){
        bot.setQuickBarSlot(0);
      }
      equiping = true
      bot.setQuickBarSlot(8);

      try {
        const mainhand = bot.inventory.slots[44]
        if (mainhand?.name === 'totem_of_undying') return

        const totum = bot.inventory.items().find(item => item.name === 'totem_of_undying')

        if (!totum) {
          botLog(6, 'No Totums Found waiting 10 seconds')
          waiting = 200;
          return
        };
        
        await bot.equip(totum, 'hand')
        botLog(5, 'Offhand Totem Equipped');
        
      } catch(err) {
        botLog(7, `Totem equip error: ${err}`);
      } finally {
        equiping = false
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