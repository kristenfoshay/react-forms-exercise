import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

const NewTodoForm = ({ createTodos }) => {
    const [todoText, createText] = useState('');

    const change = (item) => {
        const { value } = item.target;

        createText(value);
    };

    const submit = (item) => {
        item.preventDefault();
        createTodos({ todoText, id: uuid4() });
        createText('');
    };

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="todo">Todo:</label>
                <input id="todo" name="todo" value={todoText} onChange={change} />

                <button>Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodoForm;