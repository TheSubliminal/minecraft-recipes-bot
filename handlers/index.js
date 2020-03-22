const recipeHandler = require('./recipe.handler');
const { welcomeMessage } = require('../config/bot.config');

const recipeWordRegex = /^[a-zA-Z\s]+$/;

const applyHandlers = bot => {
  bot.start(ctx => ctx.replyWithMarkdown(welcomeMessage));
  bot.hears(recipeWordRegex, recipeHandler);
};

module.exports = applyHandlers;