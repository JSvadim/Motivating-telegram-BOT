// third-party
import TelegramBot from "node-telegram-bot-api";


export interface userIdNameI {
    name: string; 
    id: number;
}

export interface onStartI extends userIdNameI {
    userDate: number;
    bot: TelegramBot;
}