export async function debugLog(bot, data, title = "DEBUG") {
  try {
    const debugChatId = process.env.TG_DEBUG_CHAT_ID
    if (!debugChatId) return

    const text =
      `📘 *${title}*\n\n` +
      "```json\n" +
      JSON.stringify(data, null, 2) +
      "\n```"

    await bot.telegram.sendMessage(debugChatId, text, {
      parse_mode: "Markdown",
    })
  } catch (err) {
    console.error("Debug log error:", err)
  }
}
