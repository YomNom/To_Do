import { useNavigate } from 'react-router-dom'
import './Forms.css'

function Settings({ filter, setFilter, sortBy, setSortBy, sortDirection, setSortDirection }) {
  const navigate = useNavigate();

  async function handleSubmit(event) { 
    event.preventDefault();
    const formData = new FormData(event.target);
    const newFilter = formData.get('filter');
    const newSortBy = formData.get('sort');
    const newSortDirection = formData.get('sort-date-direction');
    setFilter(newFilter);
    setSortBy(newSortBy);
    setSortDirection(newSortDirection);

    navigate('/');
  }

  return (
    <div>
      <h1>Settings</h1>
      <form className="setting-form " onSubmit={handleSubmit}>
        <fieldset>
          <legend>Filters</legend>
          <div>
            <label><input type="radio" id="filter-all" name="filter" value="all" defaultChecked={filter === 'all'} />All</label>
            <label><input type="radio" id="filter-complete" name="filter" value="complete" defaultChecked={filter === 'complete'} />Complete</label>
            <label><input type="radio" id="filter-incomplete" name="filter" value="incomplete" defaultChecked={filter === 'incomplete'} />Incomplete</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Sort By</legend>
          <div>
            <label><input type="radio" id="sort-due" name="sort" value="due" defaultChecked={sortBy === 'due'} />Due</label>
            <label><input type="radio" id="sort-created" name="sort" value="created" defaultChecked={sortBy === 'created'} />Created</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Sort Date Direction</legend>
          <div>
            <label><input type="radio" id="sort-date-asc" name="sort-date-direction" value="asc" defaultChecked={sortDirection === 'asc'} />Ascending</label>
            <label><input type="radio" id="sort-date-desc" name="sort-date-direction" value="desc" defaultChecked={sortDirection === 'desc'} />Descending</label>
          </div>
        </fieldset>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Settings;