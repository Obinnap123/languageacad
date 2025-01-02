import React from "react";

function ListItems({ image, text, imageClass  }) {
  return (
    <>
      <li>
        <span>
          <img src={image} alt="Checkmark" className={imageClass}/>
          {text}
        </span>
      </li>
    </>
  );
}

export default ListItems;
