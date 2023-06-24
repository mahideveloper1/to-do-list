import React , { useState } from 'react'
import EditForm from './EditForm'
import CustomForm from './CustomForm'
import TaskList from './TaskList'
import useLocalStorage from "../hooks/useLocalStorage"



const Extra = () => {
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

//  const handleClick = () => {
//     completeTask(); // Call the completeTask function when needed
//   };

  return (
    <>
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
        
        <button onClick={completeTask}>Complete Task</button>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Pomodoro Sessions: {pomodoroSessions}</p>
      </div>
       
    </>
  )
}

export default Extra
