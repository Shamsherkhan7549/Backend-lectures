import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { useState } from 'react';

const AddTodo = () => {
  const [task, setTask] = useState("");
    const dispatch= useDispatch()
    const submitHanler = (event) => {
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task))
    }

    
  return (
    <div>
        <h2>Add task</h2>
        <form action="" onSubmit={submitHanler}>
            <input type="text" name='task' onChange={e=> setTask(e.target.value)}/>
            <button>add</button>
        </form>
    </div>
  )
}

export default AddTodo;