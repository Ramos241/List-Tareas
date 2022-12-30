import {useState} from 'react'
import {Agregar} from './Agregar'
import {Buscador} from './Buscador'
import {Contenedor} from './Contenedor'
import { Editar } from './Editar'

function Inicio() {
  let [listaEstado, setListaEstado] = useState([])

  return (
    <>
      <Buscador listaEstado={listaEstado} setListaEstado={setListaEstado} />
      <Contenedor listaEstado={listaEstado} setListaEstado={setListaEstado} />
      <Agregar setListaEstado={setListaEstado} />
    </>
  )
}

export default Inicio
