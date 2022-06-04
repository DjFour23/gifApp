import React from 'react'

const GifItem = ({title, url}) => {
  return (
    <div className='card animate__animated animate__bounce'>
        <img src= {url} alt = {title}/>
    </div>
  )
}

export default GifItem