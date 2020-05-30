const dashbot = require('dashbot')('WjxIknKldXiynnkKfQo0K3gTaZIYdrYe2DYgLAae').universal;

const { getItemImage } = require('../repositories/item.repository');
const { getFileLink } = require('../helpers/telegramFileLink.helper');

const recipeHandler = async ctx => {
  dashbot.logIncoming({
    text: ctx.message.text,
    userId: ctx.chat.id.toString()
  });

  try {
    let answerMessage;
    const { image, animated } = await getItemImage(ctx.message.text);

    if (animated) {
      answerMessage = await ctx.replyWithAnimation({ source: image });
    } else {
      answerMessage = await ctx.replyWithPhoto({ source: image });
    }

    const fileId = animated ? answerMessage.animation.file_id : answerMessage.photo[0].file_id;
    const fileUrl = await getFileLink(fileId);

    dashbot.logOutgoing({
      text: '',
      userId: answerMessage.chat.id.toString(),
      images: [{
        url: fileUrl
      }]
    });
  } catch (error) {
    const answerMessage = await ctx.reply('I can\'t find that item :(');
    console.log(error);

    dashbot.logOutgoing({
      text: answerMessage.text,
      userId: answerMessage.chat.id.toString()
    });
  }
};

module.exports = recipeHandler;