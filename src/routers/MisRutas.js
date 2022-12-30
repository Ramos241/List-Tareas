import React from 'react'
import {Routes, Route, HashRouter} from 'react-router-dom'
import Inicio from '../componentes/Inicio'
import { Pagina404 } from '../componentes/Pagina404'

export const MisRutas = () => {
  return (
    <HashRouter>

      {/* HEADER*/}
      <header className="header">
        <h1 className="header__nombre">Mis Peliculas</h1>
      </header>

      {/* CUERPO */}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='*' element={<Pagina404/>}/>
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        Developed by <a className='link' href="https://jaenfigueroa.com">Jaen Figueroa</a> &copy; 2022
      </footer>

    </HashRouter>
  )
}