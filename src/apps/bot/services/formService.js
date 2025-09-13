import { form } from '../forms/form.js'
import { stages } from '../utils/stages.js'
import { storage } from '../utils/storage.js'

export const formService = {
  async startForm(ctx) {
    const id = ctx.from.id
    storage.set(id, {
      currentStage: stages.NAME,
      formData: {
        id,
        username: ctx.from.username || null
      }
    })
    await ctx.reply('Заполните анкету для записи на занятия по Го:')
    await form.askName(ctx)
  },

  async handleInput(ctx) {
    const id = ctx.from.id
    const userForm = storage.get(id)

    if (!userForm) return

    const message = ctx.message
    const text = message.text

    switch (userForm.currentStage) {
      case stages.NAME:
        userForm.formData.name = text
        userForm.currentStage = stages.SURNAME
        await form.askSurname(ctx)
        break

      case stages.SURNAME:
        userForm.formData.surname = text
        userForm.currentStage = stages.PATRONYMIC
        await form.askPatronymic(ctx)
        break

      case stages.PATRONYMIC:
        userForm.formData.patronymic = text
        userForm.currentStage = stages.AGE
        await form.askAge(ctx)
        break

      case stages.AGE:
        userForm.formData.age = text
        userForm.currentStage = stages.KNOWLEDGE
        await form.askKnowledge(ctx)
        break

      case stages.KNOWLEDGE:
        if (['Да', 'Нет'].includes(text)) {
          userForm.formData.knowledge = text
          userForm.currentStage = stages.LEVEL
          await form.askLevel(ctx)
        } else {
          await ctx.reply('Пожалуйста, выберите вариант из предложенных')
        }
        break

      case stages.LEVEL:
        if (
          ['Ничего не знаю об игре', 'Начинающий (играл несколько партий, до 15 кю)', 'Средний (от 15 кю)'].includes(text)
        ) {
          userForm.formData.level = text
          userForm.currentStage = stages.CONTACT
          await form.askContact(ctx)
        } else {
          await ctx.reply('Пожалуйста, выберите вариант из предложенных')
        }
        break

      case stages.CONTACT:
        if (message.contact) {
          userForm.formData.phone = message.contact.phone_number
        } else if (text) {
          userForm.formData.phone = text
        } else {
          return await form.askContact(ctx)
        }

        await this.sendToAdmin(ctx, userForm.formData)

        await ctx.reply('Ваша анкета успешно принята! Мы свяжемся с вами в ближайшее время.', {
          reply_markup: { remove_keyboard: true }
        })

        storage.delete(id)
        break
    }
  },

  async sendToAdmin(ctx, formData) {
    const message = `*Новая заявка на занятия по Го:*

  *Имя:* ${formData.name}
  *Фамилия:* ${formData.surname}
  *Отчество:* ${formData.patronymic}
  *Возраст:* ${formData.age}
  *Знакомство с игрой:* ${formData.knowledge}
  *Уровень игры:* ${formData.level}
  *Телефон:* ${formData.phone}
  *Никнейм:* ${'@' + formData.username || 'не указан'}`

    const debugMessage = `_--LOG--\nchat id: ${ctx.from.id.toString()}\n\n\n_${message}`

    try {
      const userId = ctx.from.id.toString()
      const devId = process.env.TG_DEV_CHAT_ID
      const adminId = process.env.TG_ADMIN_CHAT_ID
      const debugId = process.env.TG_DEBUG_CHAT_ID

      // Если разработчик → только в debug/dev чат
      if (devId && userId === devId) {
        if (debugId) {
          await ctx.telegram.sendMessage(debugId, '*--DEBUG--*\n' + debugMessage, { parse_mode: 'Markdown' })
        } else {
          await ctx.telegram.sendMessage(devId, '*--DEBUG--*\n' + debugMessage, { parse_mode: 'Markdown' })
        }
      } else {
        // Обычный пользователь → админу
        if (adminId) {
          await ctx.telegram.sendMessage(adminId, message, { parse_mode: 'Markdown' })
        }
        // Дополнительно в debug для логирования
        if (debugId) {
          await ctx.telegram.sendMessage(debugId, debugMessage, { parse_mode: 'Markdown' })
        }
      }
    } catch (error) {
      console.error('Ошибка при отправке админу:', error)
      await ctx.reply('Произошла ошибка при обработке анкеты. Попробуйте ещё раз.')
    }
  }
}
