const https = require('https');

const { getItemUrl } = require('../helpers/itemUrl.helper');

const getDataFromUrl = url => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode === 404) {
        reject(new Error('Item not found!'));
      }

      const data = [];

      res.on('data', chunk => {
        data.push(chunk);
      }).on('end', () => {
        resolve(Buffer.concat(data));
      }).on('error', e => {
        reject(new Error(e));
      });
    });
  });
};

const getItemImage = async itemName => {
  try {
    const itemUrl = getItemUrl(itemName);
    return await getDataFromUrl(itemUrl);
  } catch (error) {
    const itemUrl = getItemUrl(itemName, 'gif');
    return getDataFromUrl(itemUrl);
  }
};

module.exports = {
  getItemImage
};