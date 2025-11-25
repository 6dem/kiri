import { debugLog } from "../utils/debugLog.js"

export function debugCommand(bot) {
  bot.command("debug", async (ctx) => {
    if (String(ctx.from.id) !== process.env.TG_DEV_CHAT_ID) return

    await debugLog(bot, ctx.update, "DEBUG /debug")
  })
}
