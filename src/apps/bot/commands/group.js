import { debugLog } from "../utils/debugLog.js"

export function groupCommand(bot) {
  bot.command("group", async (ctx) => {
    try {
      const chatId = process.env.TG_GROUP_ID
      const inviteLink = await ctx.telegram.exportChatInviteLink(chatId)

      await ctx.reply(`Вот ваша ссылка для вступления в группу: ${inviteLink}`)
    } catch (err) {
      console.error(err)
      await debugLog(bot, ctx.update, "DEBUG /group")
    }
  })
}
