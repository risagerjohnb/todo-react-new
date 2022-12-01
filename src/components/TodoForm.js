import { useState } from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState('')


    const handleChange = e => {
        setInput(e.target.value); //så kan man skrive på input
    };

    const handleSubmit = e => { 
        e.preventDefault(); //refresher ikke siden fordi jeg bruger form

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //chancen at få det samme id er sjædelnt
            text: input //brugerens input
        })

        setInput(''); //den sletter brugerens input hver gang man trykker på Add todo button
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <h2 className='header'>TO-DO LIST</h2>
            <input 
                type="text" 
                placeholder='Type something todo' 
                value={input}
                name='text'
                className='todo-input' 
                onChange={handleChange} 
            />
        </form>
    )
}