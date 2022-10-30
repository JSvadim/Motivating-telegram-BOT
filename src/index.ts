// third party
import "dotenv/config";
import Telegram from 'node-telegram-bot-api'

const BOT_TOKEN = process.env.BOT_TOKEN;
if(!BOT_TOKEN) throw new Error(`"BOT_TOKEN" environment variable is undefined`);

const bot = new Telegram(BOT_TOKEN, {polling: true});

bot.on('message', async message => {
    console.log(message);
})
