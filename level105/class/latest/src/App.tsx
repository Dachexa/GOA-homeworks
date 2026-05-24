import { createContext, useState } from 'react'
import HeaderSection from "./components/HeaderSection"
import MainSection from "./components/MainSection"
import FooterSection from "./components/FooterSection"
import './App.css'
import FooterSection from './components/FooterSection'
import MainSection from './components/MainSection'


interface ContextType {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}
export const context = createContext<null | ContextType>(null)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <context.Provider value={ { count, setCount: setCount }}>

      <HeaderSection></HeaderSection>
      <FooterSection></FooterSection>
      <MainSection></MainSection>
    </context.Provider> 
      <HeaderSection></HeaderSection>
      <FooterSection></FooterSection>
      <MainSection></MainSection>
      
    </>
  )
}

export default App
