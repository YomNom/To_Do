import plusLogo from './assets/plus-filled-circle.svg'
import gearLogo from './assets/gear.svg'
import TaskList from './TaskList.jsx'
import { Link } from 'react-router-dom'

function MainPage({ tasks, deleteTask, toggleComplete, filter, sortBy, sortDirection }) {
    return (
        <section id="top-section">
            <div id="header-bar">
                {/* Settings */}
                <Link to="/settings"><img className="main-logo" src={gearLogo} alt="Settings Logo" /></Link>
                
                <h1>Task List</h1>

                {/* Add Task */}
                <Link to="/create"><img className="main-logo" src={plusLogo} alt="Create Logo" /></Link>
            </div>
            <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                filter={filter}
                sortBy={sortBy}
                sortDirection={sortDirection}
            />
        </section>
    );
}

export default MainPage;