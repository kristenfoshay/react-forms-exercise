import React from 'react';

const ToDo = ({ text, remove }) => {
    return (
        <>
            <li>{text}</li>
            <button onClick={remove}>X</button>
        </>
    );
};

export default ToDo;