import React, {useEffect, useState} from "react";

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
    },[])

    useEffect(() => {
        console.log("useEffect first render every counter(deps) changes")
        document.title = counter.toString()
    },[counter])

    return <>
        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>+</button>
        {fake}
    </>
}