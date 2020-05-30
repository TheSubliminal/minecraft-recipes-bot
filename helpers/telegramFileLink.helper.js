const Telegram = require('telegraf/telegram');

const { token } = require('../config/bot.config');

const telegram = new Telegram(token);

module.exports = {
  getFileLink: telegram.getFileLink.bind(telegram)
};