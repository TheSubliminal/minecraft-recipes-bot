const { getItemImage } = require('../repositories/item.repository');

const recipeHandler = async ctx => {
  try {
    const { image, animated } = await getItemImage(ctx.message.text);

    if (animated) {
      ctx.replyWithAnimation({ source: image });
    } else {
      ctx.replyWithPhoto({ source: image });
    }
  } catch (error) {
    ctx.reply('I can\'t find that item :(');
  }
};

module.exports = recipeHandler;