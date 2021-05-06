import React, { Fragment } from "react";

function ImageList({ images }) {
  const imagen = images.map((image) => {
    return (
      <div className="card">
        <img key={image.id} src={image.webformatURL} alt="imagen"  style={{width:'100%',height:'100%'}}/>
      </div>
    );
  });
  return(
      <Fragment>
          {imagen}
      </Fragment>
  );
}

export default ImageList;
