import React, { useState } from 'react'
import AgregarBusqueda from './AgregarBusqueda'
import GifContenedor from './GifContenedor'

const GifApp = () => {
    const [categoriasBusqueda, setCategoriasBusqueda] = useState(['minimalist']);
  return (
    <>
        <div>Aplicación de Gifs</div>
        <AgregarBusqueda setCategoriasBusqueda={setCategoriasBusqueda} />
        <hr/>
        <ol>
            {
                categoriasBusqueda.map(categoriaBusqueda => (
                    <GifContenedor
                    key={categoriaBusqueda}
                    valorBusqueda={categoriaBusqueda} />
                ))
            }
        </ol>
    </>
  )
}

export default GifApp