import { formService } from '../services/formService.js'

export function registerCommand(bot) {
  bot.command('register', async (ctx) => {
    await formService.startForm(ctx)
  })

  bot.on(['text', 'contact'], async (ctx) => {
    await formService.handleInput(ctx)
  })
}
