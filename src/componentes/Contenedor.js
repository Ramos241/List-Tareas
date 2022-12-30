import React, { useEffect, useRef, useState } from 'react'
import { Editar } from './Editar'
import Sortable from 'sortablejs';
//////////////////////////////////////
export const Contenedor = ({listaEstado, setListaEstado}) => {

  //SORTABLE
  const listRef = useRef()
  
  let [editar, setEditar] = useState(0)

  useEffect(()=>{
    let resultado = traerPeliculas()
    setListaEstado(resultado)

    //SORTABLE
    new Sortable(listRef.current, {

      animation: 200,
      chosenClass: 'pelicula--seleccionado',
      dragClass: 'pelicula--invisible',
      onEnd: function (evento) {

        // Actualiza el array con el nuevo orden de los elementos
        setListaEstado((lista)=>{
          
          //sacamos los indices
          let indiceAntes = evento.oldIndex
          let indiceNuevo = evento.newIndex

          //ACTUALIZAMOS EN ARREGLO
          ////////////
          let elemento = lista.splice(indiceAntes, 1);
          let grupo = lista.splice(0, indiceNuevo)

          let actualizado = [...grupo, ...elemento, ...lista]
          ////////////

          //guardar el nuevo arreglo el local storage
          localStorage.setItem('peliculas', JSON.stringify([...actualizado]))

          //guardar el nuevo arreglo al estado
          return [...actualizado]
        })

      }
  });

  },[setListaEstado, listRef])

  ///////////////////////////////////////
  const traerPeliculas = ()=>{
    let peliculas = JSON.parse(localStorage.getItem('peliculas'))
    
    return peliculas
  }

  const eliminarPelicula = (id)=>{
    // console.log('se borro una pelicula', id)
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
    // console.log('se edita la pelicula', id);
    setEditar(id)
  }
  
  /////////////////////////////////////

  return (
    <div className='contenedor-peliculas' ref={listRef}>
      {
        listaEstado !== null &&
        listaEstado.length>= 1 ? (listaEstado.map((pelicula)=>{
          return(
            <article className="pelicula" key={pelicula.id}>
              <h3 className="pelicula__titulo">{pelicula.titulo}</h3>
              <p className="pelicula__descripcion">{pelicula.descripcion}</p>
              
              <div className='pelicula__botones'>
                <button 
                  className="pelicula__boton naranja" 
                  onClick={()=>{editarPelicula(pelicula.id)}}>Editar</button>
                <button 
                  className="pelicula__boton rojo"
                  onClick={()=>eliminarPelicula(pelicula.id)}>Borrar</button>
              </div>
              
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

    </div>
  )
  } 
