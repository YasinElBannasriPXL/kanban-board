import { useState } from 'react';
import './KanbanColumn.css';

export default function KanbanColumn() {
    const [todoDescription, setTodoDescription] = useState('');
    const [todos, setTodos] = useState([]);

    let kanbanItems = todos.map(
        (todo) => 
        <div className="kanban-item-wrapper">
            <div className='kanban-item'>
                <span className='kanban-item-content'>
                    Finish the kanban columns
                </span>
            </div>
        </div>
    );

    function addTodo(todoDescription: any) {
        setTodos([...todos, todoDescription]);
    }
    
    return (
        <div id='kanban-column-wrapper'>
            <div className='kanban-column-title'>
                <div className='kanban-column-title-dot'></div>
                <span>TODO (4)</span>
            </div>
            {kanbanItems}
            <button onClick={addTodo}>add</button>
        </div>
    )
}
