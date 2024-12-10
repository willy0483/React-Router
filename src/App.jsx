import './App.scss'

import { Navbar } from './Components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from './Pages/HomePage/HomePage';
import { AboutPage } from './Pages/AboutPage/AboutPage';
import { ConceptsPage } from './Pages/ConceptsPage/ConceptsPage';
import { ContactPage } from './Pages/ContactPage/ContactPage';

import { Errorpage } from './Pages/Errorpage/Errorpage';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Concept' element={<ConceptsPage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
