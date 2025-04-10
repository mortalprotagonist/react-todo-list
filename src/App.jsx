import "./App.css"

export default function app(){
    return(
        <>
        <form>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" name="item"></input>
            </div>
            <button>Add task</button>
        </form>
        </>
    )
}