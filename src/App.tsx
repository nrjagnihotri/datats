import React, { useState } from 'react';

import './App.css';
import InputField from './component/InputField';
import TodoList from './component/TodoList';
import { Todo } from './model';
// let name: string
// let age: number | string
// let isStudent: boolean
// let hobbies: string[]
// let rol: [number, string] //tuple type

// type Person = {
//     name: string,
//     age?: number
// }
// let person: Person = {
//     name: "raj"

// }
// function raja(name: any) {
//     console.log(name)
// }
// raja("rahul")


// let printName: (name: string) => void

// interface Person {
//     name: string,
//     age?: number
// }
// type X = {
//     a: string,
//     b: number
// }
// interface guys extends Person {
//     profession: string
// }
const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Array<Todo>>([]);
    console.log(todos)
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    }
    return (
        <div className="App">
            <span className='heading'>taskSky</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
