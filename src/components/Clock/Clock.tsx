import React, {useEffect, useState} from 'react';
import {clearInterval} from "timers";

export type ClockPropsType = {

}

const get2DigitsString = (num:number) => {
    return num < 10 ? "0" + num : num
}

export const Clock = (props:ClockPropsType) => {
    const [date,setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        },1000)

        return () => {
            clearInterval(intervalId)
        }

    },[])



    const secondsString = get2DigitsString(date.getSeconds())
    const minutesString = get2DigitsString(date.getMinutes())
    const hoursString = get2DigitsString(date.getHours())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    );
};

