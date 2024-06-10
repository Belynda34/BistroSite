import React from 'react'


const Button =({onClick,content})=>{

  const buttonStyle= {
     width:'144px',
     height:'48px',
     border:'1px solid black',
     borderRadius:'24px'

  }
  return(

    <button style={buttonStyle} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button;