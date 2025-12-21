import 'dotenv/config'
import { Telegraf } from 'telegraf'
import { cancelCommand } from "./commands/cancel.js"
import { cronCommands } from "./commands/cron.js"
import { debugCommand } from "./commands/debug.js"
import { groupCommand } from "./commands/group.js"
import { registerCommand } from './commands/register.js'
import { rulesCommand } from "./commands/rules.js"
import { startCommand } from './commands/start.js'
import { initCron } from './services/cronService.js'


const bot = new Telegraf(process.env.TG_TOKEN)

initCron(bot)

// Регистрируем команды
startCommand(bot)
cancelCommand(bot)
debugCommand(bot)
groupCommand(bot)
rulesCommand(bot)
cronCommands(bot)
//////////////////////////////////////
registerCommand(bot) // Должна быть в самом низу


// Запуск
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
