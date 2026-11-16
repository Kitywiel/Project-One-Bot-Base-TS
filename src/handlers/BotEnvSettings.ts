import env from 'dotenv'
env.config()

function confirtToNum(num: any): number{
  const port = Number(num)
  if (Number.isNaN(port)) throw new Error('minecraft port is not an valid number in the .env file')
  return port
}

export const botEnvSettings = {
  proxy: {
    host: '',
    port: confirtToNum(process.env['']),
    username: '',
    passcode: ''
  },
  mc: {
    host: process.env['MC_HOST'],
    port: confirtToNum(process.env['MC_PORT']),
    username: process.env['MC_USERNAME'],
    password: process.env['MC_PASSCODE'],
    auth: process.env['MC_AUTH'],
  }
}