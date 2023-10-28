import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todolist from './TodoList'; // Correct the import path
import AddTask from './AddTask'; // Correct the import path

function App() {
  const [page, setPage] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/tasks?_limit=3&_page=${page}`);
      setTasks(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [page]);

  return (
    <div className='App'>
      {error && <div>Error: {error.message}</div>} {/* Access error.message */}
      {loading ? (<div>Loading....</div>) : (<Todolist tasks={tasks} fetchTask={fetchTasks} />)}
      <AddTask fetchTask={fetchTasks} /> {/* Correct the prop name here */}
    </div>
  );
}

export default App;
