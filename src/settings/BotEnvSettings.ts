import env from 'dotenv'
env.config()

// changes an string to an number
function confirtToNum(num: any): number{
  const port = Number(num)
  if (Number.isNaN(port)) throw new Error('minecraft port is not an valid number in the .env file')
  return port
}
function makeItString(tar: any): string{
  if (tar != String) {
    return tar.toString
  }
  return tar
}

// bot settings
export const botEnvSettings = {
  proxy: {
    host: process.env['PROXY_HOST'],
    port: confirtToNum(process.env['PROXY_PORT']),
    username: makeItString(process.env['PROXY_USERNAME']),
    passcode: makeItString(process.env['PROXY_PASSCODE']),
  },
  mc: {
    host: process.env['MC_HOST'],
    port: confirtToNum(process.env['MC_PORT']),
    username: process.env['MC_USERNAME'],
    password: process.env['MC_PASSCODE'],
    auth: process.env['MC_AUTH'],
  }
}