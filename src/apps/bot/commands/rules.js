import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { debugLog } from "../utils/debugLog.js"


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function rulesCommand(bot) {
  bot.command("rules", async (ctx) => {
    try {
      const filePath = path.join(__dirname, "..", "assets", "rules.pdf")

      await ctx.replyWithDocument({
        source: fs.createReadStream(filePath),
        filename: "Правила_Го.pdf"
      })
    } catch (err) {
      console.error("rules error:", err)
      await ctx.reply("Не удалось отправить файл. Попробуйте позже.")
      await debugLog(
        bot,
        {
          update: ctx.update,
          error: {
            message: err.message,
            stack: err.stack
          }
        },
        "DEBUG /rules"
      )
    }
  })
}
