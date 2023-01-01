import React, {  } from 'react'

export const Buscador = ({listaEstado, setListaEstado}) => {

  // let [busqueda, setBusqueda] = useState('')
  // let [numero, setNumero] = useState(0)

  const buscar = (e)=>{
    let target = e.target
    let busqueda = target.value

    // setBusqueda(busqueda)

    //obtener la lsta de peliculas
    let lista_peliculas = JSON.parse(localStorage.getItem('peliculas'))
    //filtrar las coincidencias
    let lista_filtrada = lista_peliculas.filter(elemento =>{
      // console.log(elemento);
      // console.log(elemento.titulo, busqueda)

      
      return elemento.titulo.toLowerCase().includes(busqueda.toLowerCase())
    })

    // setNumero(lista_filtrada.length)
    setListaEstado(lista_filtrada)
  }

  return (
    <section className='header'>
      {/*HEADER */}
      <header className="header__logo">
        <h1 className="header__nombre">Mis Peliculas</h1>
      </header>
    
      {/* NAV */}
      <div className="caja-buscador">
        <form onChange={buscar}>
          <input type="text"
                name='busqueda'
                id="search_field"
                autoComplete='off'
                />
          <button id="search" type='submit'>
            <i className="fa-solid fa-magnifying-glass icono-lupa"></i>
            Buscar
            </button>
        </form>
      </div>
    </section>
  )
}
