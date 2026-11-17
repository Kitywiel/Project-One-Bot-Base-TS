export function botLog(type: number, msg: string, array?: object){
  let prefix: string = ''
  switch (type) {
    case 1: prefix = '\x1b[1;33mINFO'; break;
    case 2: prefix = '\x1b[1;38;5;12mSERVER MESSAGE'; break;
    case 3: prefix = '\x1b[1;38;5;45;49mCHAT'; break;
    case 4: prefix = '\x1b[1;38;5;14mBOT'; break;
    default: prefix = 'UNSET'; break;
  }
  if (msg && array) console.log(`\x1b[1;90m[\x1b[1;95mONE BOT NIGHTLY\x1b[1;90m](${prefix}\x1b[1;90m)>\x1b[0m ${msg} || ${array}`)
  if (!array) console.log(`\x1b[1;90m[\x1b[1;95mONE BOT NIGHTLY\x1b[1;90m](${prefix}\x1b[1;90m)>\x1b[0m ${msg}`)
  if (!msg) console.log(`\x1b[1;90m[\x1b[1;95mONE BOT NIGHTLY\x1b[1;90m](${prefix}\x1b[1;90m)>\x1b[0m ${array}`)
}