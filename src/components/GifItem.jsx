import React from 'react'

const GifItem = ({tittle, url}) => {
  return (
    <div>
        <img src= {url} alt = {tittle}/>
        <p>{tittle}</p>
    </div>
  )
}

export default GifItem