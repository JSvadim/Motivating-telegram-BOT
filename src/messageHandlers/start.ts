// third party
import path from "path";

// local imports
import { UserService } from "../services/user";
import { onStartI } from "../types/messageHandlers";
import { getMinutesDifference } from "../constantsAndTools/helpers";


export async function start(args:onStartI) {

    const {name, id, userDate, bot} = args;
    const timeDifference = getMinutesDifference(userDate);
    const pathToPic = path.join("src", "assets", "img", "typing-cat.gif");
    
    try {
        await bot.sendDocument(id, pathToPic);
        await UserService.addUser({id, name, timeDifference});
        bot.sendMessage(id, `Привет, ${name}! Я сделаю из тебя девелопера.`);

    } catch(e: any) {

        console.log("START EXECUTION ERROR");
        console.log(e);

        // if user is already in database he gets this message;
        if(e.code === 'ER_DUP_ENTRY') {
            return bot.sendMessage(id, `Привет снова, ${name}. Мотивируйся на здоровье!`);
        }
        // unknown error
        bot.sendMessage(id, `Привет, ${name}.
            На сервере произошла КОТальная ошибка, 
            возможно я не смогу тебя мотивировать :(.
            Попробуй выполнить команду старт снова!`);
    }
}