export function startCommand(bot) {
  bot.start(async (ctx) => {
    await ctx.reply('Добро пожаловать! Для записи на занятия используйте /register')
  })
}
