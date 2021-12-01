import React, { useState } from 'react';
import './Textbox.css';
import { addText } from './TextBoxSlice';
import { useDispatch } from 'react-redux';

export function Textbox() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        dispatch(addText(task))
        setTask("")
    }

    return (
        <div id='textbox'>
            <h1 id='question'>What's on your mind today?</h1>
            <form onSubmit={handleTaskSubmit}>
            <input id='text-input' type='text' placeholder='Enter your thoughts here' value={task} 
                 onChange={(e) => setTask(e.currentTarget.value)}
            />
            </form>
        </div>
    )
}
