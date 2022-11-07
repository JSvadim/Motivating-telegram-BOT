// third party
import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";

// local imports
import { start } from "./messageHandlers/start";


const BOT_TOKEN = process.env.BOT_TOKEN;
if(!BOT_TOKEN) throw new Error(`"BOT_TOKEN" environment variable is undefined`);
const bot = new TelegramBot(BOT_TOKEN, {polling: true});

bot.on('message', async message => {
    const id = message.chat.id;
    const text = message.text;
    const name = message.chat.first_name || "noname";
    const userDate = message.date;
    /* 
        console.log("MESSAGE:");
        console.log(message);
     */

    switch(text) {
        case "/start" :
            start({name, id, userDate, bot});
            break;
        default : 
            bot.sendMessage(id, `${text} - так девелоперы не говорят!`);
    }
    
})
