const { getItemImage } = require('../repositories/item.repository');

const recipeHandler = async ctx => {
  try {
    const recipeImage = await getItemImage(ctx.message.text);
    ctx.replyWithPhoto({ source: recipeImage });
  } catch (error) {
    ctx.reply('I can\'t find that item :(');
  }
};

module.exports = recipeHandler;