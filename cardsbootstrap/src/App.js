import React,  {useEffect , useState}  from 'react'
import './App.css'
//importo Router para utilizar las rutas
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
//import las vistas a utiliar en las rutas
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Favoritos from './components/Favoritos'
import Personajes from './components/Personajes'

function App() {
  
  
  useEffect(() => {
    document.title ='StarWars'
}, [])  

  return ( 
    
      <div className='App'> 
        <Router>

          <Navbar />

            <Routes>
              <Route path='/' element={<Inicio/>} />
              <Route path='/personajes' element={<Personajes/>} />
              <Route path='/favoritos'  element={<Favoritos/>} />
            </Routes>
               
        </Router>
      </div>
  )
}


export default App
