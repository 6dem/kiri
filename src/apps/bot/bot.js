import 'dotenv/config'
import { Telegraf } from 'telegraf'
import { registerCommand } from './commands/register.js'
import { startCommand } from './commands/start.js'

const bot = new Telegraf(process.env.TG_TOKEN)

// Регистрируем команды
startCommand(bot)
registerCommand(bot)

// Запуск
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
