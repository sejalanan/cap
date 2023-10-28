import axios from 'axios';

export default function Todolist({ tasks, fetchTask }) { // Correct the prop name
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTask();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {tasks.map((task) => ( // Use the correct variable name 'task' here
        <div key={task.id}>
          <span>{task.title}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
