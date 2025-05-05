import { useState } from "react"

export default function NewTask({ onAdd }) {
    const [enteredTasks, setEnteredTasks] = useState('');

    function handleChange(event) {
        setEnteredTasks(event.target.value);    
    }
    
    function handleClick() {
        if(enteredTasks.trim() === '') return;
        onAdd(enteredTasks);
        setEnteredTasks('');
    }

    return <div className="flex items-cecnter gap-4">
        <input 
            type="text" 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange} 
            value={enteredTasks}
        />
        <button 
            className="text-stone-700 hover:text-stone-950" 
            onClick={handleClick}
        >Add Task
        </button>
    </div>
}