import React from 'react';
import {ClockViewType} from "./Clock";
import styles from './AnalogClockView.module.css';

export const AnalogClockView = (props: ClockViewType) => {

    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };

    return (
        <div className={styles.clock}>
            <div className={styles["analog-clock"]}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
            </div>
        </div>
    )
}



