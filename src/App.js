import React, { useState } from 'react';

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

import Navbar from './components/Navbar/Navbar'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'
import PomodoroTimer from './components/Pomodoro/PomodoroTimer';
import AnalyticsChart from './components/AnalyticsChart';

const App = () => {
 const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }
 const [completedTasks, setCompletedTasks] = useState(0);
  const [pomodoroSessions, setPomodoroSessions] = useState(0);

  // Function to handle task completion
  const completeTask = () => {
    setCompletedTasks(completedTasks + 1);
    setPomodoroSessions(pomodoroSessions + 1);
  };

return (
    <>
      <Navbar />
      <PomodoroTimer/>
      <div className='container'>
       <header>
        <h1>My Task</h1>
       </header>
        {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={addTask}/>
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
      </div>
        <div>
      <h1>Analytics</h1>
      <div className="button-container"> {/* Apply the CSS class */}
        <button className="button" onClick={completeTask}>Complete Task</button> {/* Apply the CSS classes */}
      </div>
      <AnalyticsChart completedTasks={completedTasks} pomodoroSessions={pomodoroSessions} />
    </div>
    
      
    </>
  )
}

export default App
