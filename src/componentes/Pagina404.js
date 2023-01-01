import React from 'react'
import Imagen404 from '../assets/Imagen404.js'

export const Pagina404 = () => {
  return (
    <div className='contenedor-caja404'>
      <Imagen404 className='imagen404'/>
      <div className='caja404'>
        <h1 className='caja404__titulo'>¡Ups! Página no encontrada</h1>
        <p className='caja404__parrafo'>
          La página a la que intenta acceder no existe o ha sido movida.</p>
        <button className='caja404__boton'>Ir a la página de inicio</button>
      </div>
    </div>
  )
}
