import React, {useEffect, useState} from "react";
import {Clock, ClockPropsType} from "./Clock";

export default {
    title: 'Clock',
    component:Clock
}


export const BaseAnalogExample= () => {
    return (
          <Clock mode={'analog'}/>
    )
};

export const BaseDigitalExample= () => {
    return (
        <Clock mode={'digital'}/>
    )
};

