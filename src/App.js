import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

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

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}  onDelete={deleteTask}/>)
      : (
        'No tasks to show at the moment'
      )
      }
    </div>
  );
}

export default App;
