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
        reject(e);
      });
    });
  });
};

const getItemImage = async itemName => {
  try {
    const itemUrl = getItemUrl(itemName);
    const image = await getDataFromUrl(itemUrl);
    return { image, animated: false };
  } catch (error) {
    const itemUrl = getItemUrl(itemName, 'gif');
    const image = await getDataFromUrl(itemUrl);
    return { image, animated: true };
  }
};

module.exports = {
  getItemImage
};