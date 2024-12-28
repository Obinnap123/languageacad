import React from 'react'

function Button({ title, backgroundColor, color, border, height, width }) {
  return (
   <>
    <button style={{ backgroundColor, color, border, height, width }}>
        {title}
      </button>
   </>
  )
}

export default Button