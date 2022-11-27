import KanbanColumn from './KanbanColumn'
import './KanbanBoard.css'

export default function KanbanBoard() {
    return (
        <div id="kanban-board-wrapper" className='flex flex-col min-h-screen w-4/5'>
            <div id='kanban-board-upper' className='flex flex-row h-24 grow w-full'>
                <div className='grow'>
                    Add new task
                </div>
            </div>
            <div id='kanban-board-body' className='flex flex-row gap-5 h-full'>body</div>
        </div>
    )
}