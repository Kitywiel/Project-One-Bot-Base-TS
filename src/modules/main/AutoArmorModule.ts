import { bot } from "../../handlers/BotCreateHandler.js";
import { botLog } from "../../utils/ConsoleBotLog.js";

let enabled: boolean = false;
let equiping: boolean = false;
let interval: ReturnType<typeof setInterval> | null = null;

const helmetRanking = [
  'netherite_helmet',
  'diamond_helmet',
  'iron_helmet',
  'golden_helmet',
  'leather_helmet'
];
const chestRanking = [
  'netherite_chestplate',
  'diamond_chestplate',
  'iron_chestplate',
  'golden_chestplate',
  'leather_chestplate'
];
const legsRanking = [
  'netherite_leggings',
  'diamond_leggings',
  'iron_leggings',
  'golden_leggings',
  'leather_leggings'
];
const bootsRanking = [
  'netherite_boots',
  'diamond_boots',
  'iron_boots',
  'golden_boots',
  'leather_boots'
];

async function equipBestArmor(ranking: string[], slot: number, destination: any) {
  const armor = bot.inventory.items()
    .filter(item => ranking.includes(item.name))
    .sort((a, b) => ranking.indexOf(a.name) - ranking.indexOf(b.name));

  const equipped = bot.inventory.slots[slot];
  const best = armor[0];

  if (!best) return;

  if (
    !equipped ||
    (ranking.includes(equipped.name) &&
    ranking.indexOf(best.name) < ranking.indexOf(equipped.name))
  ) {
    await bot.equip(best, destination);
  }
}

export const autoArmorModule = {
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
    if (!enabled || equiping) return;

    equiping = true;

    try {
      await equipBestArmor(helmetRanking, 5, 'head');
      await equipBestArmor(chestRanking, 6, 'torso');
      await equipBestArmor(legsRanking, 7, 'legs');
      await equipBestArmor(bootsRanking, 8, 'feet');
    } catch (err) {
      botLog(6, `Auto armor error: ${err}`);
    } finally {
      equiping = false;
    }
    }, 500);
  },
  stopint:() => {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }
}