import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/Guardar_en-storage'

export const Agregar = ({setListaEstado}) => {

  let [pelicula, setPelicula] = useState({})

  const crearPelicula = (e)=>{
    e.preventDefault()

    //traer los datos del formulario
    let target = e.target
    let titulo = target.titulo.value
    let descripcion  = target.descripcion.value

    // crear la nueva pelicula
    let nuevaPelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    //asignar la pelicula en el estdo
    setPelicula(nuevaPelicula)

    //ACTUALIZAR ESTADO DEL CONTENEDOR DE PELICULAS*
    setListaEstado((estadoActual)=>{
      if (Array.isArray(estadoActual)) {
        return [...estadoActual, nuevaPelicula]
      } else{
        return [nuevaPelicula]
      }
    })

    GuardarEnStorage('peliculas',nuevaPelicula)
    // console.log(nuevaPelicula.titulo)
  }

  return (
    <div className="add">
      <h3 className="title">Añadir pelicula</h3>
      {
        pelicula.id &&
        (<p className='aviso' >
          Haz guardado la pelicula: <b>{pelicula.titulo}</b>
        </p>)
      }
      <form onSubmit={crearPelicula}>
        <input type="text" id="title" placeholder="Titulo" name='titulo'/>
        <textarea id="description" placeholder="Descripción" name='descripcion'></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  )
}
