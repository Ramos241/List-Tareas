import React from 'react'
import {Routes, Route, HashRouter} from 'react-router-dom'
import Inicio from '../componentes/Inicio'
import { Pagina404 } from '../componentes/Pagina404'

export const MisRutas = () => {
  return (
    <HashRouter>

      {/* HEADER*/}


      {/* CUERPO */}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='*' element={<Pagina404/>}/>
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="footer" title='Portafolio'>
        Developed by <a className='link' href="https://jaenfigueroa.com" target='_blank'>Jaen Figueroa</a> &copy; 2022
      </footer>

    </HashRouter>
  )
}