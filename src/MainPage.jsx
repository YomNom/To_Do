import plusLogo from './assets/plus-filled-circle.svg'
import gearLogo from './assets/gear.svg'

function MainPage() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <div id="header-bar">
            {/* Gear */}
            <Link to="/settings"><img id="logo" src={gearLogo} alt="Settings Logo" /></Link>
            
            <h1>Task List</h1>

            {/* Add Task */}
            <Link to="/create"><img id="logo" src={plusLogo} alt="Create Logo" /></Link>
            </div>
        </View>
    );
}

export default MainPage;