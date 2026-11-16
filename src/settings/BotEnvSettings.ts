import env from 'dotenv'
env.config()

// changes an string to an number
function confirtToNum(num: any): number | undefined{
  const port = Number(num)
  if (Number.isNaN(port)) return undefined /*throw new Error('minecraft port is not an valid number in the .env file')*/
  return port
}
function makeItString(value: string | undefined): string | undefined {
  const trimmed = value?.trim()
  return trimmed || undefined
}

function stringMaker(value: any): string{
  if (value != String) {
    return value?.toString()
  }
  else return value
}


// bot settings
export const botEnvSettings = {
  mc: {
    host: process.env['MC_HOST'],
    port: confirtToNum(process.env['MC_PORT']),
    username: process.env['MC_USERNAME'],
    password: process.env['MC_PASSCODE'],
    auth: process.env['MC_AUTH'],
    version: stringMaker(process.env['MC_VERSION']),
  },
  proxy: {
    host: process.env['PROXY_HOST'],
    port: confirtToNum(process.env['PROXY_PORT']),
    username: makeItString(process.env['PROXY_USERNAME']),
    passcode: makeItString(process.env['PROXY_PASSCODE']),
  },
}