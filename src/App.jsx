import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Passwordgenrater from './component/Passwordgenrater'

function App() {
 

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-slate-600'>
     <Passwordgenrater/>
    </div>
  )
}

export default App
