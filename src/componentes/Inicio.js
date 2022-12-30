import {useState} from 'react'
import {Agregar} from './Agregar'
import {Buscador} from './Buscador'
import { Caja } from './Caja'
// import {Contenedor} from './Contenedor'
// import { Editar } from './Editar'

function Inicio() {
  let [listaEstado, setListaEstado] = useState([])

  return (
    <>
      <Buscador listaEstado={listaEstado} setListaEstado={setListaEstado} />
      <Caja listaEstado={listaEstado} setListaEstado={setListaEstado} />
      <Agregar setListaEstado={setListaEstado} />
    </>
  )
}

export default Inicio
