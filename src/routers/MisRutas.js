import React from 'react'
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom'
import Inicio from '../componentes/Inicio'
import { Pagina404 } from '../componentes/Pagina404'

export const MisRutas = () => {
  return (
    <HashRouter>

      {/* HEADER*/}


      {/* CUERPO */}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='*' element={<Pagina404/>}/>
        </Routes>
      </main>

      {/* FOOTER */}
      <footer
        className="footer"
        title='Portafolio'>
          Developed by
          <a className='link' 
          href="https://jaenfigueroa.com" 
          target='_blank'
          rel="noreferrer">Gabriel Ramos</a> &copy; 2022
      </footer>

    </HashRouter>
  )
}