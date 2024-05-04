import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const message = ">_ Hello World"
  const name = ["Gud Moring","Gud Afternoon","Gud Evening"];
  const date = new Date();
  const hour = date.getHours();
  return (
    <>
      <h1> {message} </h1>
	  <h5> React App </h5>
    <h5> { date.getHours() } </h5>
    </>
  )
}


export default App
