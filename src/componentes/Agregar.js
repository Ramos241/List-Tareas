import React, { useRef, useState } from 'react'
import { GuardarEnStorage } from '../helpers/Guardar_en-storage'

export const Agregar = ({setListaEstado}) => {

  // let [pelicula, setPelicula] = useState({})

  const crearPelicula = (e)=>{
    e.preventDefault()

    //traer los datos del formulario
    let target = e.target
    let titulo = target.titulo.value
    let descripcion  = target.descripcion.value

    //comprobar que no esten vacios
    if (titulo && descripcion) {
      
      // crear la nueva pelicula
      let nuevaPelicula = {
        id: new Date().getTime(),
        titulo,
        descripcion
      }
  
      //asignar la pelicula en el estdo
      // setPelicula(nuevaPelicula)
  
      //ACTUALIZAR ESTADO DEL CONTENEDOR DE PELICULAS*
      setListaEstado((estadoActual)=>{
        if (Array.isArray(estadoActual)) {
          return [nuevaPelicula, ...estadoActual ]
        } else{
          return [nuevaPelicula]
        }
      })
  
      //guardar en local storage
      GuardarEnStorage('peliculas',nuevaPelicula)
  
      //CAMBIA EL FORMULARIO A CIRCULO
      cambiarEstado()
    } else{
      cambiarEstado()
    }

  }

  //////////////////////////
  const [activo, setActivo] = useState(false)
  const boton = useRef()

  const cambiarEstado = ()=>{
    setActivo(!activo)
  }

  return (
    <>
      {/* CAJA */}
      <div className={activo? "contenedor-agregar contenedor-agregar--activo": "contenedor-agregar"} ref={boton}>
        {
          activo? (
            <div>
              <i className="fa-solid fa-xmark icono-cerrar" onClick={cambiarEstado}></i>

              <h3 className="agregar__titulo">Añadir pelicula</h3>
              {/* {
                pelicula.id &&
                (<p className='aviso' >
                  Haz guardado la pelicula: <b>{pelicula.titulo}</b>
                </p>)
              } */}
              <form
                onSubmit={crearPelicula}
                className='agregar__formulario'>
                <input 
                  className='agregar__input'
                  id="title"
                  type="text"
                  autoComplete='off'
                  placeholder="Titulo"
                  name='titulo'/>
                <textarea 
                  className='agregar__input'
                  id="description" 
                  placeholder="Descripción" 
                  name='descripcion'/>
                <input
                  className='agregar__input verde'
                  type="submit"
                  id="save"
                  value="Guardar" />
              </form>
            </div>
          )

          : (
              <div className='contenedor-icono-mas' onClick={cambiarEstado}>
                <i className="fa-solid fa-plus icono-mas"></i>
              </div>
          )
        }

      </div>
    </>
  )
}
