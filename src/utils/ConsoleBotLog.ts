export function botLog(type: number, msg: string, array?: object){
  let prefix: string = ''
  switch (type) {
    case 1: prefix = '\x1b[1;33mINFO'; break;
    case 2: prefix = '\x1b[1;94mSERVER MESSAGE'; break;
    case 3: prefix = '\x1b[1;94mCHAT'; break;
    case 4: prefix = '\x1b[1;38;5;18;49mBOT'; break;
    case 5: prefix = '\x1b[1;96;49mACTION'; break;
    case 6: prefix = '\x1b[1;31;49mFAILED'; break;
    case 7: prefix = '\x1b[1;31;49mERROR';break;
    default: prefix = 'UNSET'; break;
  }
  if (msg && array) console.log(`\x1b[1;90m[\x1b[1;95mONE BOT NIGHTLY\x1b[1;90m](${prefix}\x1b[1;90m)>\x1b[0m ${msg} || ${array}`)
  if (!array) console.log(`\x1b[1;90m[\x1b[1;95mONE BOT NIGHTLY\x1b[1;90m](${prefix}\x1b[1;90m)>\x1b[0m ${msg}`)
  if (!msg) console.log(`\x1b[1;90m[\x1b[1;95mONE BOT NIGHTLY\x1b[1;90m](${prefix}\x1b[1;90m)>\x1b[0m ${array}`)
}