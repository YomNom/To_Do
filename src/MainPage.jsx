import plusLogo from './assets/plus-filled-circle.svg'
import gearLogo from './assets/gear.svg'
import { Link } from 'react-router-dom'

function MainPage() {
    return (
        <section id="top-section">
            <div id="header-bar">
                {/* Settings */}
                <Link to="/settings"><img id="logo" src={gearLogo} alt="Settings Logo" /></Link>
                
                <h1>Task List</h1>

                {/* Add Task */}
                <Link to="/create"><img id="logo" src={plusLogo} alt="Create Logo" /></Link>
            </div>
        </section>
    );
}

export default MainPage;