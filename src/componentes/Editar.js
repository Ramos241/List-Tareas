import React from 'react'

export const Editar = ({pelicula, setListaEstado, setEditar}) => {
  
  const actualizarPelicula = (evento, id)=>{
    evento.preventDefault()

    //////////////////
    //traer todas las peliculas
    let peliculas = JSON.parse(localStorage.getItem('peliculas'))

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
    setEditar(0)
  }

  return (
    <div className='edit_form'>
      <h3>Editar</h3>
      <form onSubmit={(evento)=>actualizarPelicula(evento, pelicula.id)}>
        <input name='titulo'
               className='titulo_editado'
               type="text"
               defaultValue={pelicula.titulo} />
        <textarea name='descripcion'
                  className='descripcion_editada'
                  defaultValue={pelicula.descripcion}/>
        <input type="submit"/>
      </form>
    </div>
  )
}
