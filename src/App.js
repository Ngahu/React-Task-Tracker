import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskCreate from './components/TaskCreate'

function App() {

  const [showAddTask, setShowAddTask ] = useState(true)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Coach Appointment",
        day: 'Feb 5th at 14:30',
        reminder: true,
      },
      {
        id: 2,
        text: 'Groceries Shopping',
        day: 'Feb 6th at 13:00',
        reminder: false
      },
      {
        id: 3,
        text: 'School meeting',
        day: 'Feb 7th at 09:40',
        reminder: true
      },
      {
        id: 4,
        text: 'Food Shopping',
        day: 'Feb 8th at 12:40',
        reminder: false
      }
    ]
  )

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000)+ 1

    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }
  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Remider
  const toggleRemider = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <TaskCreate onCreate={addTask} /> }
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleRemider} />)
      : (
        'No tasks to show at the moment'
      )
      }
    </div>
  );
}

export default App;
