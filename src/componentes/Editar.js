import React from 'react'
import {traerPeliculas} from '../helpers/traerPeliculas'

//////////////////////////////////////
export const Editar = ({ setListaEstado, peliEditar, setPeliEditar}) => {
  
  const actualizarPelicula = (evento, id)=>{
    evento.preventDefault()

    //traer todas las peliculas
    let peliculas = traerPeliculas()
    //actualizar los valores de esa pelicula
    peliculas.forEach(elemento => {
      if (elemento.id === id) {

        elemento.titulo = evento.target.titulo.value
        elemento.descripcion = evento.target.descripcion.value
      }
    });

    //actualizar estado del contenedor de peliculas
    setListaEstado(peliculas)
    //guardar el local storage
    localStorage.setItem('peliculas', JSON.stringify(peliculas))
    //crear el formulario de editar
    setPeliEditar(-1)
  }

  ///////////////////////////////////////
  if (peliEditar !== -1) {
    return (
        <div className='contenedor-editar'>
  
            <h3 className='editar__titulo'>Editar</h3>
            <form onSubmit={(evento)=>actualizarPelicula(evento, peliEditar.id)}
                  className='editar__fomulario'>
              <input name='titulo'
                    className='titulo_editado'
                    type="text"
                    autoComplete='off'
                    defaultValue={peliEditar.titulo} />
              <textarea name='descripcion'
                        className='descripcion_editada'
                        autoComplete='off'
                        defaultValue={peliEditar.descripcion}/>
              <input
                className='editar__boton-listo verde'
                type="submit"
                value='Listo'/>
            </form>
  
        </div>
    )
  }
}
