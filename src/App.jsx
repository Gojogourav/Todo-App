import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='h-screen w-full flex items-center justify-center  text-white text-3xl'>

      <div className='flex-col'>
      {/* This is a todo app
      <p>features to implement</p>
      <p>1. Add todos</p>
      <p>2. Delete todos</p>
      <p>3. Update todos</p>
      <p>4. Save todos locally</p> */}
      <AddTodo/>
      <TodoList/>
      </div>
     </div>
    </>
  )
}

export default App
