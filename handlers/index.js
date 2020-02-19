const recipeHandler = require('./recipe.handler');

const recipeWordRegex = /^[a-zA-Z\s]+$/;

const applyHandlers = bot => {
  bot.start((ctx) => ctx.reply('Welcome!'));
  bot.hears(recipeWordRegex, recipeHandler);
};

module.exports = applyHandlers;