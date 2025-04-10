import { useState } from "react";
import "./App.css";

export default function app() {
    const [newItem, SetNewItem] = useState("")
    const [todos, setTodos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        setTodos(currentTodos => {
            return [
                ...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false },
            ]
        })

        SetNewItem("")

    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }
    return (
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
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <label >
                                <input type="checkbox" checked={todo.completed}
                                    onChange={e => toggleTodo(todo.id, e.target.checked)}
                                />
                                {todo.title}
                            </label>
                            <button className="btn btn-danger"> Delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}