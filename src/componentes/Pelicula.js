import React, {useState} from 'react'
import { Editar } from './Editar'

export const Pelicula = ({pelicula, setListaEstado}) => {

  let [editar, setEditar] = useState(0)

  const traerPeliculas = ()=>{
    let peliculas = JSON.parse(localStorage.getItem('peliculas'))
    return peliculas
  }

  const eliminarPelicula = (id)=>{
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

  return (
    <article className="pelicula">
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
        editar === pelicula.id && (
          <Editar pelicula={pelicula}
                  setListaEstado={setListaEstado}
                  setEditar = {setEditar}/>
        )
      }
    </article>
  )
}
