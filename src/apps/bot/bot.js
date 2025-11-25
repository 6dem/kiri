import 'dotenv/config'
import { Telegraf } from 'telegraf'
import { debugCommand } from "./commands/debug.js"
import { groupCommand } from "./commands/group.js"
import { registerCommand } from './commands/register.js'
import { startCommand } from './commands/start.js'

const bot = new Telegraf(process.env.TG_TOKEN)

// Регистрируем команды
startCommand(bot)
registerCommand(bot)
debugCommand(bot)
groupCommand(bot)

// Запуск
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
