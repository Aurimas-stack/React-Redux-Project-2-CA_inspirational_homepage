import React, {useState, useEffect} from 'react';
import './Tasks.css';
import { selectText } from '../TextBox/TextBoxSlice';
import { useSelector } from 'react-redux';

export function Tasks() {
    const [isActive, setActive] = useState(null);
    const [currTasks, setTasks] = useState(null);
    const tasks = useSelector(selectText);
    let colors = ['#457b9d',  '#e63946', '#588157', '#f77f00'];

    const toggleClass = (index) => {
        setActive((isActive) => (isActive === index ? null : index));
    };

    useEffect(() => {
        setTasks(tasks)
    },[tasks])


    const removeItem = (e) => {
        e.preventDefault();
        const itemToRemove = tasks[isActive]
        setTasks(currTasks.filter(item => item !== itemToRemove));    
    }

    return (
        <div id='task-container'>
            {
                currTasks !== null ? 
                currTasks.map((task, i) => {
                    if(colors.length === 0) {
                        colors =  ['#457b9d',  '#e63946', '#588157', '#f77f00'];
                    }
                    const color = colors.splice(0,1);
                    return (
                        <div 
                        key={i}
                        className='task'
                        style={{backgroundColor: color[0]}}
                        onMouseEnter={() => toggleClass(i)}
                        onMouseLeave={() => toggleClass(i)}
                        >
                        {task}
                        <div className={ isActive === i ? 'buttonsOn' : 'off'}>
                            <button className='done btn'>Done</button>
                            <button className='remove btn' onClick={removeItem}>Remove</button>
                        </div>
                        </div>
                    )
                }) : ''
            }
        </div>
    )
}