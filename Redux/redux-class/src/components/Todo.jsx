import { useSelector, useDispatch} from "react-redux";
import AddTodo from "./AddTodo";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import React from "react";


export default function Todo(){
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    const dispatch = useDispatch();

    const handingDelete = (id) =>{
      
      dispatch(deleteTodo(id))
    }

    const handlingMark = (id) => {
      console.log("done", id);
      dispatch(markAsDone(id))
    }

    return(
        <>
          <h2>Todo</h2>
           <AddTodo/>
          <ul>
            {todos.map((todo,key)=> (<li key={todo.id}> <span>{todo.task}</span> <button onClick={()=> handingDelete(todo.id)}>delete</button> <button onClick={()=>handlingMark(todo.id)}>done</button></li>))}
          </ul>
        </>
    )
}