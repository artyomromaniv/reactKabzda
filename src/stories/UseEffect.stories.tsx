import React, {useEffect, useState} from "react";
import {log} from "util";
import {clearInterval} from "timers";

export default {
    title: 'useEffect demo',
}

//Side effects
//api.getUsers().then('') - запрос на сервер
//setInterval - интервалы
//indexedDB - работа с базой данных
//document.getElementID - обращение напрямую к ДОМ элементов
//document.title = " User" - изменение названия тайтла

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only firs render (аналог componentDidMount")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render every counter(deps) changes")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SetTimeoutExample")

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    return <>
        Hello, {fake}
        <button onClick={() => setFake(fake + 1)}> fake +</button>
        {counter}
        <button onClick={() => setCounter(counter + 1)}> counter+</button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SetIntervalExample")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
//важно! всегда зачищать интервал или таймаут
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}> fake +</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}> counter+</button>*/}
        counter: {counter}
    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('');
    console.log('Component rendered');

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler);

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text]);

    return <>
        Typed text: {text}
    </>
}