import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, deleteTodo, checkTodo } from '../features/slices';

function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const [todotxt, setTodotxt] = useState("");
    const [editableTodoid, setEditableTodoid] = useState(null); // Use null to indicate no item is being edited

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const updateTodoHandler = (todo) => {
        if (todotxt.trim() === "") return;
        dispatch(updateTodo({ id: todo.id, text: todotxt.trim() }));
        setTodotxt("");
        setEditableTodoid(null); // Reset editableTodoid
    };

    const checkTodoHandler = (todo) => {
        dispatch(checkTodo(todo.id));
    };

    const deleteTodoHandler = (todo) => {
        dispatch(deleteTodo(todo.id));
    };

    return (
        <div className='border border-gray-600 flex-col items-center justify-between content-center text-lg w-fit'>
            {todos.map((todo) => (
                <div key={todo.id} className='flex items-center justify-between'>
                    <input
                        onChange={() => checkTodoHandler(todo)}
                        checked={todo.checked}
                        className='m-2 p-2 mx-3 items-center accent-black'
                        type="checkbox"
                    />
                    <input
                        value={editableTodoid === todo.id ? todotxt : todo.text}
                        onChange={(e) => setTodotxt(e.target.value)}
                        type="text"
                        readOnly={editableTodoid !== todo.id}
                        className='bg-black text-white border border-gray-600 p-1'
                    />
                    <div className='flex justify-end ml-24'>
                        <button
                            onClick={() => {
                                if (todo.checked) return; // Do nothing if the todo is checked

                                if (editableTodoid === todo.id) {
                                    updateTodoHandler(todo); // Save changes
                                } else {
                                    setEditableTodoid(todo.id); // Start editing
                                    setTodotxt(todo.text); // Load current text into input
                                }
                            }}
                            disabled={todo.checked}
                            className='border border-gray-600 m-2 p-2'
                        >
                            {editableTodoid === todo.id ? "Save" : "Edit"}
                        </button>
                        <button
                            onClick={() => deleteTodoHandler(todo)}
                            className='border border-gray-600 m-2 p-2'
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
