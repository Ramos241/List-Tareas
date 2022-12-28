import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'

export const ContenedorDePeliculas = ({listaEstado, setListaEstado}) => {

  let [editar, setEditar] = useState(0)

  useEffect(()=>{
    let resultado = traerPeliculas()

    setListaEstado(resultado)

  },[setListaEstado])

  ///////////////////////////////////////
  const traerPeliculas = ()=>{
    let peliculas = JSON.parse(localStorage.getItem('peliculas'))
    
    return peliculas
  }

  const eliminarPelicula = (id)=>{
    console.log('se borro una pelicula', id)

    //traer las peliculas de local storage
    let lista_de_peliculas = traerPeliculas()

    //filtrar las peliculas
    let nuevaLista = lista_de_peliculas.filter((pelicula) => pelicula.id !== id)

    //actualizar el estado del contendor de peliculas
    setListaEstado(nuevaLista)

    //guardar esta nueva lista en local estorage
    localStorage.setItem('peliculas', JSON.stringify(nuevaLista))
  }

  const editarPelicula = (id) =>{
    console.log('se edita la pelicula', id);

    setEditar(id)
  }
  
  return (
    <>
      {
        listaEstado !== null &&
        listaEstado.length>= 1 ? (listaEstado.map((pelicula)=>{
          return(
            
            <article className="peli-item" key={pelicula.id}>
              <h3 className="title">{pelicula.titulo}</h3>
              <p className="description">{pelicula.descripcion}</p>
              
              <div className='contenedor-botones'>
                <button className="edit" onClick={()=>{editarPelicula(pelicula.id)}}>Editar</button>
                <button className="delete" onClick={()=>eliminarPelicula(pelicula.id)}>Borrar</button>
              </div>
              
              {/* seccion de editar */}
  
              {
                editar === pelicula.id && <Editar pelicula={pelicula}
                                                  setListaEstado={setListaEstado}
                                                  setEditar = {setEditar}/>
              }
            </article>
          )
        }))

        : <h1 className='aviso-no-hay'>No hay peliculas</h1>
      }
    </>
  )
  } 
