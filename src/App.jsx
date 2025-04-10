import { useState } from "react";
import "./App.css";

export default function app(){
    const [newItem, SetNewItem] = useState("")
    const [todos , setTodos] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        setTodos(currentTodos => {
            return [
                ...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false },
        ]
        })

    }
    return(
    <>
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item"> New Item</label>
                <input 
                    value={newItem} 
                    type="text" 
                    id="item"
                    onChange={e => SetNewItem(e.target.value)}>
                </input>
            </div>
            <button className="btn">Add task</button>
        </form>
        <h1 className="header">Todo List</h1>
        <ul className="list">
            {todos.map}
            <li>
                <label htmlFor="">
                    <input type="checkbox" name="" id="" />Item 1
                    <button className="btn btn-danger"> Delete</button>
                </label>
            </li>
            <li>
                <label htmlFor="">
                    <input type="checkbox" name="" id="" />Item 2
                    <button className="btn btn-danger"> Delete</button>
                </label> 
                </li>
        </ul>
    </>
    )
}