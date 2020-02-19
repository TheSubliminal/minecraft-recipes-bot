const { getItemPage } = require('../repositories/item.repository');

const getRecipeImage = itemPage => {
  const document = itemPage.window.document;
  const recipeElement = document.querySelector('.mcui.mcui-Crafting_Table.pixel-image');
  console.log(recipeElement);
};

const recipeHandler = async ctx => {
  const itemPage = await getItemPage(ctx.message.text);
  const recipeImage = getRecipeImage(itemPage);
  // ctx.reply(recipeImage);
};

module.exports = recipeHandler;