import React, { useEffect, useRef} from 'react'
import { Pelicula } from './Pelicula';
import Sortable from 'sortablejs';
import { NoResultados } from './NoResultados';

export const Caja = ({listaEstado, setListaEstado, setPeliEditar}) => {

  //SORTABLE
  const listRef = useRef()
  
  useEffect(()=>{
    let resultado = traerPeliculas()
    setListaEstado(resultado)



    new Sortable(listRef.current, {
  
      animation: 200,
      chosenClass: 'pelicula--seleccionado',
      // dragClass: 'pelicula--invisible',
      filter: '.contenedor__noResultados' ,
      handle: '.icono-jalar',

      onEnd: function (evento) {

        //comrobar que no sea la imagen de o hay resultados
        if (evento.clone.className !== 'contenedor__noResultados' ) {

          // console.log(evento.clone.className)
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
      } 
    })

  },[setListaEstado, listRef])



  const traerPeliculas = ()=>{
    let peliculas = JSON.parse(localStorage.getItem('peliculas'))
    return peliculas
  }

  //////////////////////
  return (
    <>
      <p className='aviso-resultados'>Total de resultados: <span>{listaEstado.length}</span></p>
      <div className='contenedor-peliculas' ref={listRef}>
            { listaEstado !== null && listaEstado.length > 0 ?
              listaEstado.map((pelicula)=>{
              return(

                <Pelicula
                  pelicula={pelicula}
                  setListaEstado={setListaEstado}
                  key={pelicula.id}

                  setPeliEditar={setPeliEditar} />
              )
              }) : <NoResultados />
            }
      </div>
    </>
  )
}
