import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {       //if leaving blank spaces dont lengthen the todo
        if(!todo.text || /^\s*$/.test(todo.text)) { 
            return;
        }
        
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    }

    const removeTodo = id => {      //så sletter man kun en todo
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }
       
    return (
        <div className='todolist'>
            <TodoForm onSubmit={addTodo}/>
            <Todo
                todos={todos}
                removeTodo={removeTodo} 
            />
        </div>
    )
}