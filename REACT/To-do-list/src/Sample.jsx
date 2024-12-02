import React, { useState } from 'react'

export default function Sample() {
    const [tasks, setTasks] = useState([])
    const [taskText, setTaskText] = useState('')
    const [filter, setFilter] = useState("all")
    //console.log(taskText);

    const addTask = (e) => {
        e.preventDefault()
        if (taskText.trim()) {
            const newTask = {
                id: Date.now(),
                text: taskText,
                completed: false,
            };
            setTasks([...tasks, newTask])
            setTaskText('')
        }
    }

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
        setTasks(updatedTasks);
    }


    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const filterTasks = () => {
        switch (filter) {
            case 'completed':
                return tasks.filter((task) => task.completed)
            case 'incomplete':
                return tasks.filter((task) => !task.completed)
            default:
                return tasks;
        }
    }

    return (
        <div>
            <h1>To do List</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder='Enter task'
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("incomplete")}>Incomplete</button>

            <ul>
                {
                    filterTasks().map((task) => (
                        <li key={task.id} className={task.completed ? 'completed' : ''}>
                            <span
                                onClick={() => toggleTaskCompletion(task.id)}
                                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            >
                                {task.text}</span>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}


