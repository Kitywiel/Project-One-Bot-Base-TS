export function botLog(type: number, msg: string, array: object){
  let prefix: string = ''
  switch (type) {
    case 1: prefix = 'INFO'; break;
    case 2: prefix = 'SERVER MESSAGE'; break;
    default: prefix = 'UNSET'; break;
  }
  if (msg && array) console.log(`[ONE BOT NIGHTLY](${prefix})> ${msg} || ${array}`)
  if (!array) console.log(`[ONE BOT NIGHTLY](${prefix})> ${msg}`)
  if (!msg) console.log(`[ONE BOT NIGHTLY](${prefix})> ${array}`)
}