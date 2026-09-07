import { useState } from 'react'

// Formats date to Month Day, Year (e.g., September 4, 2026)
export function formatDate(date) {
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	return new Date(date).toLocaleDateString('en-US', options)
}

// Custom hook to manage tasks and their operations
export function useTasks() {
	const [tasks, setTasks] = useState([
		{
			taskName: 'First Task',
			completed: false,
			dueDate: '2026-09-04',
			creationDate: '2026-09-03'
		},
		{
			taskName: 'Second Task',
			completed: false,
			dueDate: '2026-09-05',
			creationDate: '2026-09-03'
		},
		{
			taskName: 'Third Task',
			completed: false,
			dueDate: '2026-09-06',
			creationDate: '2026-09-03'
		}
	])

	function createTask(taskName, dueDate) {
		setTasks(currentTasks => [
			...currentTasks,
			{
				taskName,
				completed: false,
				dueDate,
				creationDate: formatDate(new Date())
			}
		])
	}

	function editTask(index, taskName, dueDate) {
		setTasks(currentTasks => currentTasks.map((task, taskIndex) => (
			taskIndex === index ? { ...task, taskName, dueDate } : task
		)))
	}

	function deleteTask(index) {
		setTasks(currentTasks => currentTasks.filter((_, taskIndex) => taskIndex !== index))
	}

	function toggleComplete(index) {
		setTasks(currentTasks => currentTasks.map((task, taskIndex) => (
			taskIndex === index ? { ...task, completed: !task.completed } : task
		)))
	}

	return { tasks, setTasks, createTask, editTask, deleteTask, toggleComplete }
}
