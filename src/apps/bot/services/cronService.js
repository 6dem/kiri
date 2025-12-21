import cron from 'node-cron'
import { MESSAGE_20, MESSAGE_5 } from '../constants/cronMessages.js'

export function initCron(bot) {
  // 5 число каждого месяца в 16:00
  cron.schedule('0 16 5 * *', async () => {
    await sendToAdminChats(bot.telegram, MESSAGE_5)
  }, { timezone: 'Europe/Moscow' })

  // 20 число каждого месяца в 16:00
  cron.schedule('0 16 20 * *', async () => {
    await sendToAdminChats(bot.telegram, MESSAGE_20)
  }, { timezone: 'Europe/Moscow' })
}

export async function sendToAdminChats(telegram, text) {
  const chats = [
    process.env.TG_DEV_CHAT_ID,
    process.env.TG_OWNER_CHAT_ID,
  ]

  for (const chatId of chats) {
    await telegram.sendMessage(chatId, text)
  }
}
