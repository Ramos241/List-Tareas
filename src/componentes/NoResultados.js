import React from 'react'
import SvgComponent from '../assets/noHayResultados'

export const NoResultados = () => {
  return (
    <div className='contenedor__noResultados'>
      <SvgComponent className='noResultados__imagen'/>
      <p className='noResultados__titulo'>¡Vaya!... no se han<br/> encontrado resultados</p>
    </div>
  )
}
