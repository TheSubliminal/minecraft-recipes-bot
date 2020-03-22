const Telegraf = require('telegraf');

const { token } = require('./config/bot.config');
const applyHandlers = require('./handlers');

const bot = new Telegraf(token);

applyHandlers(bot);

bot.launch().then(() => {
  // eslint-disable-next-line no-console
  console.log('Bot started!');
});