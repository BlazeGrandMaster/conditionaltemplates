// This code is a React app that displays a list of tasks.
// The tasks are stored in an array of objects.
// Each object has an id, a name, and a completed property.
// The name property is the name of the task.
// The completed property is a boolean that indicates whether the task is completed.
// The array of tasks is rendered as a list of list items.
// The tasks are iterated over and for each task an li element is created with a span element nested inside.
// The span element contains the id and name of the task.

import { useState } from "react";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState([
		{ id: 5271, name: "Record React Lectures", completed: true },
		{ id: 7825, name: "Edit React Lectures", completed: false },
		{ id: 9881, name: "Watch Lectures", completed: false },
	]);

	function handleDelete(id) {
		setTasks(tasks.filter((task) => task.id !== id));
	}

	return (
		<div className="App">
			<h1>Task List</h1>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<span>
							{task.id} - {task.name}
						</span>
						<button onClick={() => handleDelete(task.id)} className="delete">
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
