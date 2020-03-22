require('dotenv').config();

module.exports = {
  token: process.env.TELEGRAM_TOKEN,
  welcomeMessage: 'Welcome!\n\nI can retrieve you any *Minecraft* crafting recipe you would ask for.\n\nJust send me the name of an item you want to look up!'
};