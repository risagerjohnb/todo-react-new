import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import MdCheckBox from "react-icons/md"

export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }
       

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete //
                
            }
            return (
                {todo}
            )
        });
        setTodos(updatedTodos);
    };

    return (
        <div className='todolist'>
            <TodoForm onSubmit={addTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo} 
            />
        </div>
    )
}