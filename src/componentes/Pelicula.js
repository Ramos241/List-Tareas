import React from 'react'

export const Pelicula = ({pelicula, setListaEstado, setPeliEditar}) => {

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

  return (
    <>
      <article className="pelicula">

        <i className="fa-solid fa-grip icono-jalar" title='Mover de posicion'></i>

        <h3 className="pelicula__titulo">{pelicula.titulo}</h3>
        <p className="pelicula__descripcion">{pelicula.descripcion}</p>
        
        <div className='pelicula__botones'>
          <button 
            className="pelicula__boton naranja" 
            onClick={()=>{setPeliEditar(pelicula)}}
            title='Editar'>
              Editar
              <i className="fa-solid fa-pen-to-square iconos-pelicula" ></i>
          </button>
          <button 
            className="pelicula__boton rojo"
            onClick={()=>eliminarPelicula(pelicula.id)}
            title='Eliminar'>
              Borrar
              <i className="fa-solid fa-trash iconos-pelicula"></i>
          </button>
        </div>
        
      </article>
    
    </>
  )
}
