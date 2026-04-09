import { useState } from 'react'
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Section></Section>
    <Footer></Footer>
    </>
  )
}

export default App
