import { useActionState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Forms.css'

function Create({ createTask }) {
  const navigate = useNavigate()
  const today = new Date().toLocaleDateString('en-CA')

  // Handles the submission asynchronously, returns to main page
  async function handleSubmit(prevData, formData) {
    const taskName = formData.get('taskName'); // Matches input name attribute
    const dueDate = formData.get('dueDate'); // Matches input name attribute

    if (!taskName?.trim() || !dueDate || dueDate < today) {
      return { success: false };
    }
    
    createTask(taskName, dueDate)
    navigate('/')

    return { success: true };
  }

  const [state, formAction, isPending] = useActionState(handleSubmit, null);

  return (
    <div>
      <h1>Create</h1>
      <form action={formAction} method="post">
        <div className="form-group">
          <label htmlFor="taskName">To-Do Item Name</label>
          <input type="text" name="taskName" placeholder="Task Name" required />
          <label htmlFor="dueDate">Select Due Date</label>
          <input type="date" name="dueDate" min={today} required /> 
          <button type="submit">Save</button>
        </div>
      </form>
    </div> 
  );
}

export default Create;