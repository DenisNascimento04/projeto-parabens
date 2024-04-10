import { useState } from "react";

export function useTime(date: string, state: boolean){
    const [days, setDays] =  useState(0);
    const [hour, setHour] =  useState(0);
    const [minute, setMinute] =  useState(0);
    const [seconds, setSeconds] =  useState(0);

    const timer = () => {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();
        // console.log(countDate+"/"+now);
        if (countDate <= now || !state) {
            setDays(0);
            setHour(0);
            setMinute(0);
            setSeconds(0);
        }else{
            const interval = countDate - now;
    
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
    
            const dayNumber = Math.floor(interval / day);
            const hourNumber = Math.floor((interval % day) / hour);
            const minuteNumber = Math.floor((interval % hour) / minute);
            const secondNumber = Math.floor((interval % minute) / second);
    
            setDays(dayNumber);
            setHour(hourNumber);
            setMinute(minuteNumber);
            setSeconds(secondNumber);
        }
    }
    if (state) {
        setTimeout(timer, 1000);
        return [days, hour, minute, seconds];
    }
    return [days, hour, minute, seconds];
}