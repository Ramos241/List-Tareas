import React, { useState } from 'react'

export const Buscador = ({listaEstado, setListaEstado}) => {

  let [busqueda, setBusqueda] = useState('')
  let [numero, setNumero] = useState(0)

  const buscar = (e)=>{
    let target = e.target
    let busqueda = target.value

    setBusqueda(busqueda)

    //obtener la lsta de peliculas
    let lista_peliculas = JSON.parse(localStorage.getItem('peliculas'))

    //filtrar las coincidencias
    let lista_filtrada = lista_peliculas.filter(elemento =>{
      // console.log(elemento);
      console.log(elemento.titulo, busqueda)
      return elemento.titulo.toLowerCase().includes(busqueda)
    })


    setNumero(lista_filtrada.length)

    setListaEstado(lista_filtrada)
  }

  return (
    <div className="search">
    <h3 className="title" >Buscador: {busqueda}</h3>
    {
      busqueda.length>0 && <p className={`aviso ${numero===0 && 'aviso__rojo'}`}>Resultados: {numero}</p>
    }
    <form onChange={buscar}>
      <input type="text"
            name='busqueda'
            id="search_field"
            />
      <button id="search">Buscar</button>
    </form>
  </div>
  )
}
