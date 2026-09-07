import { useActionState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Forms.css'

function Edit({ tasks, editTask }) {
  const navigate = useNavigate()
  const { index } = useParams()
  const taskIndex = Number(index)
  const task = tasks[taskIndex]
  const today = new Date().toLocaleDateString('en-CA')

  // Handles the submission asynchronously, returns to main page
  async function handleSubmit(formData) {
    const taskName = formData.get('taskName'); // Matches input name attribute
    const dueDate = formData.get('dueDate'); // Matches input name attribute

    // Makes sure the task name is not empty, the due date is not empty, and the due date is not in the past
    if (!taskName?.trim() || !dueDate || dueDate < today) {
      return { success: false };
    }
    
    editTask(taskIndex, taskName, dueDate)
    navigate('/')

    return { success: true };
  }

  const [state, formAction, isPending] = useActionState(handleSubmit, null);

  return (
    <div>
      <h1>Edit</h1>
      <form action={formAction} method="post">
        <div className="form-group">
          <label htmlFor="taskName">To-Do Item Name</label>
          <input type="text" name="taskName" placeholder="Task Name" defaultValue={task.taskName} required />
          <label htmlFor="dueDate">Select Due Date</label>
          <input type="date" name="dueDate" min={today} defaultValue={task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : ''} required />
          <button type="submit">Save</button>
        </div>
      </form>
    </div> 
  );
}

export default Edit;