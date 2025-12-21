import { MESSAGE_20, MESSAGE_5 } from '../constants/cronMessages.js'
import { sendToAdminChats } from "../services/cronService.js"

const DEV_ID = Number(process.env.TG_DEV_CHAT_ID)

export function cronCommands(bot) {
  bot.command('cron5', ctx => {
    if (ctx.from.id !== DEV_ID) return
    sendToAdminChats(ctx.telegram, MESSAGE_5)
  })

  bot.command('cron20', ctx => {
    if (ctx.from.id !== DEV_ID) return
    sendToAdminChats(ctx.telegram, MESSAGE_20)
  })
}
