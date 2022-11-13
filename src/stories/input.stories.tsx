import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/input',
    //component: input,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof input>;


export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChangeHandler}/> {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/><button onClick={save}>save</button> - actual value: {value} </>
}

export const ControlledInput = () => {
    const[parentValue,setParentValue]=useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const[parentValue,setParentValue]=useState(true)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox"  checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
    const[parentValue,setParentValue]=useState<string | undefined>(undefined)
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=> {
        setParentValue(e.currentTarget.value)
    }
    //если option, то всегда value(стринга)
    return <select value={parentValue} onChange={onChangeHandler}>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'It-incubator.by'}/>
