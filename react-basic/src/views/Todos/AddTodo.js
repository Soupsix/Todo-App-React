import React, { useState } from "react";
const AddTodo = ({ addNewTodo }) => {

    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if(!inputValue.trim()) {
            alert('Please enter a todo item!');
        }
        if (inputValue.trim()) {
            const newTodo = {
                id: Math.floor(Math.random() * 10000),
                title: inputValue.trim()
            };
            console.log(">>>ID: " , newTodo.id);
            addNewTodo(newTodo);
            setInputValue('');
        }
    };

    return (
        <>
            <div className="add-todos">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter new todo..."
                    className="todo-input"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()} //Theo dõi phím cụ thể: onKeyPress
                />
                <button 
                    onClick={handleAddTodo}
                    className="btn-add"
                >
                    Add
                </button>
            </div>
        </>
    )

}

export default AddTodo;