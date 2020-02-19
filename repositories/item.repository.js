const { JSDOM } = require('jsdom');

const { host } = require('../config/recipeSource.config');

const getItemPage = async itemName => {
  const urlConvertedItem = itemName
    .toLowerCase()
    .split(' ')
    .join('_');
  const itemUrl = `${host}/${urlConvertedItem}`;

  return JSDOM.fromURL(itemUrl);
};

module.exports = {
  getItemPage
};