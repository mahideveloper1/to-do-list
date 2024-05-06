import React from 'react';
import {Routes, Route} from "react-router-dom"
// import Extra from './components/Extra';
import About from "./components/About"
// custom hooks
import Navbar from './components/Navbar/Navbar'
import PomodoroTimer from './components/Pomodoro/PomodoroTimer';
const App = ({completedTasks,pomodoroSessions}) => {
return (
    <>
      <Navbar />
      <Routes>
       
      <Route path='/' element={<PomodoroTimer/>  }   />
      <Route path='/about' element={<About/>} ></Route>
      </Routes>
    </>
  )
}

export default App
