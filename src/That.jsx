import React, { useState } from "react";

export const That =()=>{
    const [task, setTask] = useState(``)
    let storage = []


    const getTask = ()=>{
        if(task.trim() !== ``){
            storage.push(task)
        }
    }

    return(
        <>
            <label htmlFor="text"> Enter Task</label>
            <input type="text" name="" id="text"  onChange={()=> setTask(event.target.value)} />
            <button onClick={getTask}>Save</button>

            <p>hello {task}</p>
        </>
    )
}











