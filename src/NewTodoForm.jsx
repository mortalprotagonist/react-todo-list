import { useState } from "react";
export function NewTodoForm(props) { //here we can do props or destructuring using {onSubmit}
    props.onSubmit
    const [newItem, SetNewItem] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        props.onSubmit(newItem)

        SetNewItem("")

    }

    return (
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
    )

}