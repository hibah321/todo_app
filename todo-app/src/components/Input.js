import React from 'react'

import { useState } from "react"

const Input = ( {addtask} ) => {
    const [text, setText] = useState('');
    const [status, setStatus] = useState(false);
    const something = (b) =>{
        if (b.keycode ===13 && b.shiftKey === false){
            onSubmit()
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text){
            alert('Add a task')
        }
        else{
            addtask({text, status})
            setText('')
        }
    }
    return (
        <form className="input-field" onSubmit = {onSubmit}>
            <input value = {text} onKeyDown = {(b) => something(b)} onChange = {(e) => setText(e.target.value)} type="text" className="input" />
        </form>
    )
}

export default Input
