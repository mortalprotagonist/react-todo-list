import "./App.css"

export default function app(){
    return(
        <>
        <form className="new-item-form">
            <div className="form-row">
                <label htmlFor="item"> New Item</label>
                <input type="text" id="item"></input>
            </div>
            <button>Add task</button>
        </form>
        </>
    )
}