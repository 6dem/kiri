import { formService } from '../services/formService.js'

export function registerCommand(bot) {
  bot.command('register', async (ctx) => {
    await formService.startForm(ctx)
  })

  // Обрабатываем только текст и контакт
  bot.on(['text', 'contact'], async (ctx) => {
    await formService.handleInput(ctx)
  })
}
