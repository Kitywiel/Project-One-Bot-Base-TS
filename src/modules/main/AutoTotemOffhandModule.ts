import { bot } from "../../handlers/BotCreateHandler.js";
import { botLog } from "../../utils/ConsoleBotLog.js";

let enabled: boolean = false;
let equiping: boolean = false
let waiting: number = 0;
let interval: ReturnType<typeof setInterval> | null = null;

export const autoTotemModule = {
  
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
      if (!enabled) return
      if (waiting > 0) {
        waiting--
        return
      }

      if (equiping) return
      equiping = true
      
      try{
        const offhand = bot.inventory.slots[40]
        if (offhand?.name === 'totem_of_undying') return

        const totum = bot.inventory.items().find(item => item.name === 'totem_of_undying')
        if (!totum) {
          botLog(6, 'No Totums Found waiting 10 seconds')
          waiting = 2000;
          return
        }

        await bot.equip(totum, 'off-hand')
        botLog(5, 'Totem Equipt')
        equiping = false
      } catch(err){
        botLog(7, `Totem equip error: ${err}`);
      } finally {
        equiping = false;
      }
    }, 5);
  },
  stopint:() => {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }
}