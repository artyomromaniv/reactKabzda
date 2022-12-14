import React, {useState} from 'react';

export default {
    title: 'useState demo',
}

export function generateData() {
    console.log("generate Data")
    return 1
}

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) =>{
        return state + 1
    }


    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}