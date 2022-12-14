import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import AboutMe from './assets/page/AboutMe'
import Contact from './assets/page/Contact'
import Home from './assets/page/Home'
import Projects from './assets/page/Projects'
import curriculum from './assets/document/Formato CV Amigable para Bots 🤖 💼 (1).pdf'

function App() {
 
  return (
    <div className="App">
      <HashRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home curriculum={curriculum}/>}/>
          <Route path='contact/' element={<Contact/>}/>
          <Route path='aboutme/' element={<AboutMe/>}/>
          <Route path='projects/' element={<Projects/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
