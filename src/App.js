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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
