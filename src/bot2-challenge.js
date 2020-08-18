const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
  const from = ctx.update.message.from
  msg = from.id === 123 ? 'Ao seu dispor, mestre' : 'Sinto muito, mas eu só falo com o meu mestre'
  ctx.reply(msg)
})

bot.startPolling()