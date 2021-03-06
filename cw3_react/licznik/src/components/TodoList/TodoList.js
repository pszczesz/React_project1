import React, { useState } from 'react';
import Todo from './Todo';

function TodoList(props) {
    // const [todoList, setTodoList] = useState([]);
    // const [inputValue, setInputValue] = useState("");
    const [todoListState, setTodoListState] = useState({ todos: [], inputValue: "" });
    const handleInputChange = (event) => {
        const { value } = event.target;
        console.log(value);
        // setInputValue(value);
        setTodoListState({
            ...todoListState,
            inputValue: value
        })
    }
    const handleButtonClick = () => {
        // setTodoList([...todoList,inputValue]);
        // setInputValue("");
        const { todos } = todoListState;
        setTodoListState({
            todos: [...todos, inputValue],
            inputValue: ""
        })

    };
    const { todos, inputValue } = todoListState;

    return (
        <div className="TodoList">
            <h1>Moja aplikacja Todo</h1>
            <input
                name="Todo Input"
                className="Input"
                placeholder="co będziemy dzisiaj robić"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                className="Button"
                onClick={handleButtonClick}
            >Dodaj</button>
            {todos.map((todo) => (
                <Todo
                    key={todo}
                    todo={todo}
                />
            ))}
        </div>
    )
}
export default TodoList;