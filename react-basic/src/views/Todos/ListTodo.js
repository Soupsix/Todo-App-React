import React, { useState } from "react";
import './Todo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

const ListTodo = () => {
    const [todos, setTodos] = useState([
        { id: 'todo1', title: 'Learn React' },
        { id: 'todo2', title: 'Build a Todo App'},
        { id: 'todo3', title: 'Deploy to Production' },
        { id: 'todo4', title: 'Test the App' }
    ]);

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleEditTodo = (id) => {
        const newTitle = prompt('Edit todo:');
        if (newTitle && newTitle.trim()) {
            setTodos(todos.map(todo => 
                todo.id === id ? { ...todo, title: newTitle.trim() } : todo
            ));
        }
    };

    const addNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        toast.success("New Todo Added Successfully!"); // Show success message
         // Log the new todo to the console
        console.log(">>> New Todo Added: ", newTodo);
    }

    return (
        <div className="list-todo-container">
            <h2 className="todo-title">Simple Todo List</h2>
            
            
            <AddTodo addNewTodo={addNewTodo} />
            
            <div className="list-todos-content">
                {todos && todos.length > 0 ? (
                    todos.map((item) => (
                        <div key={item.id} className="todo-child">
                            <span className="todo-text">
                                {item.title}
                            </span>
                            <div className="button-group">
                                <button 
                                    onClick={() => handleEditTodo(item.id)}
                                    className="btn-edit"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDeleteTodo(item.id)}
                                    className="btn-delete"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-message">No todos yet. Add one above!</p>
                )}
            </div>
        </div>
    );
};

export default ListTodo;