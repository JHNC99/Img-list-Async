import React from 'react'

function ImageList({images}) {
    const imagen=images.map((image)=>{
        return(
            <img src={image.webformatURL} alt="" />
        )
    })
    return (

        <div>
            {imagen}
        </div>
    )
}

export default ImageList
