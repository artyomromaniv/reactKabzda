import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";


export type ClockPropsType = {
    mode?: 'digital' | "analog"
}

export type ClockViewType = {
    date: Date
}


export const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;

    switch (props.mode) {
        case 'analog' :
            view = <AnalogClockView date={date}/>
            break;
        case 'digital' :
        default:
            view = <DigitalClockView date={date}/>
    }
    return (
        <div>
            {view}
        </div>
    );
};



