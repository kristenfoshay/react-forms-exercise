import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, updateTodos] = useState([]);

    const createTodos = ({ todoText, id }) => {
        updateTodos([...todos, { todoText, id }]);
    };

    const deleteTodo = (id) => {
        updateTodos(todos.filter((t) => t.id !== id));
    };

    return (
        <div>
            <NewTodoForm createTodos={createTodos} />

            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} text={todo.todoText} remove={() => deleteTodo(todo.id)} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;