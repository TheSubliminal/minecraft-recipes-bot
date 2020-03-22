const { base } = require('../config/recipeSource.config');

const getItemUrl = (itemName, extension = 'png') => {
  const urlConvertedItem = itemName
    .toLowerCase()
    .split(' ')
    .join('');
  return `${base}${urlConvertedItem}.${extension}`;
};

module.exports = { getItemUrl };