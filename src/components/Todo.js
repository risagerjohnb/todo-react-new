import { HiXMark } from "react-icons/hi2"

function Todo({todos, completeTodo, removeTodo}) {


    const todoMap = todos.map((todo, index) => (
        <div className={todo.isComplete} key={index}> {/*? er if, : er else. Toggles hvis todo er complete */}
        
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            
            
        </div>
        {todo.text}
        <HiXMark onClick={() => removeTodo(todo.id)} className="check"/>
        
        
        </div>
    ))

    return (
        <div className="addedtodos">{todoMap}
        
        </div>
    )
}

export default Todo;