
export const form = {
  async askName(ctx) {
    await ctx.reply('Введите ваше имя:')
  },
  async askSurname(ctx) {
    await ctx.reply('Введите вашу фамилию:')
  },
  async askPatronymic(ctx) {
    await ctx.reply('Введите ваше отчество:')
  },
  async askAge(ctx) {
    await ctx.reply('Укажите ваш возраст:')
  },
  async askKnowledge(ctx) {
    await ctx.reply('Знакомы ли Вы с игрой Го?', {
      reply_markup: { keyboard: [['Да', 'Нет']], resize_keyboard: true }
    })
  },
  async askLevel(ctx) {
    const keyboard = [
      ['Ничего не знаю об игре'],
      ['Начинающий (играл несколько партий, до 15 кю)'],
      ['Средний (от 15 кю)']
    ]
    await ctx.reply('Какой у Вас уровень игры?', {
      reply_markup: { keyboard, resize_keyboard: true }
    })
  },
  async askContact(ctx) {
    await ctx.reply('Отправьте ваш контакт для связи:', {
      reply_markup: {
        keyboard: [[{ text: 'Отправить контакт', request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true
      }
    })
  }
}
