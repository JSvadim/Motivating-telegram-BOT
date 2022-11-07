// time calculations START
export function getMinutesDifference(date: number) {

    // returns difference in minutes between server time and user time

    const userMinutes = getUserMinutes(date);
    const serverMinutes = getServerMinutes();
    return userMinutes - serverMinutes
}

export function getUserMinutes(date: number) {
    
    // returns minutes passed from 00:00 at user living place
    // example: 01:20 - returns 80

    const UserDate = new Date(date * 1000);
        const userHours = UserDate.getHours();
        const userMinutes = UserDate.getMinutes();
        return userMinutes + userHours * 60;
}

export function getServerMinutes() {
    
    // returns minutes passed from 00:00 at place where server is located
    // example: 01:20 - returns 80

    const serverDate = new Date();
        const serverHours = serverDate.getHours();
        const serverMinutes = serverDate.getMinutes();
        return serverMinutes + serverHours * 60;
}
// time calculations END


