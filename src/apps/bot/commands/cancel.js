import { storage } from '../utils/storage.js'

export function cancelCommand(bot) {
  bot.command('cancel', async (ctx) => {
    const id = ctx.from.id
    const current = storage.get(id)

    if (!current) {
      return ctx.reply('Нет активных действий.')
    }

    storage.delete(id)

    await ctx.reply('Вы вышли из режима заполнения. Действие отменено.', {
      reply_markup: { remove_keyboard: true }
    })
  })
}
