import pencilIcon from './assets/pencil.svg';
import deleteLogo from './assets/trashcan.svg';
import { useNavigate } from 'react-router-dom';
import { formatDate } from './mutateTasks';
import './TaskList.css';

// Task List component that displays a list of tasks with filtering and sorting capabilities
function TaskList({ tasks, deleteTask, toggleComplete, filter, sortBy, sortDirection }) {
    const navigate = useNavigate();

    // Filter and sort tasks based on the provided criteria
    const visibleTasks = tasks
        .map((task, index) => ({ task, index }))
        .filter(({ task }) => (
            filter === 'complete' ? task.completed :
            filter === 'incomplete' ? !task.completed :
            true
        ))
        .sort(({ task: firstTask }, { task: secondTask }) => {
            const firstDate = sortBy === 'created' ? firstTask.creationDate : firstTask.dueDate;
            const secondDate = sortBy === 'created' ? secondTask.creationDate : secondTask.dueDate;
            const difference = new Date(firstDate) - new Date(secondDate);
            return sortDirection === 'desc' ? -difference : difference;
        });
    
    return (
        <div className="task-list-section">
            {visibleTasks.map(({ task, index }) => (
                <TaskCard key={index} task={task} index={index} deleteTask={deleteTask} toggleComplete={toggleComplete} formatDate={formatDate} />
            ))}
        </div>
    );

    function TaskCard({ task, index, deleteTask, toggleComplete, formatDate }) {
        return (
            <div className="task-card">
                {/* Navigate to Edit.jsx */}
                <button type="button" onClick={() => navigate(`/edit/${index}`)}>
                    <img className="task-logo" src={pencilIcon} alt="Edit task" />
                </button>
                <div className="task-card-text">
                    <h2>{task.taskName}</h2>
                    <p>Due: {formatDate(task.dueDate)}</p>
                    <p>Created: {formatDate(task.creationDate)}</p>
                </div>
                <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(index)} />
                <button type="button" onClick={() => deleteTask(index)}>
                    <img className="task-logo" src={deleteLogo} alt="Delete task" />
                </button>
            </div>
        );
    }
}

export default TaskList;