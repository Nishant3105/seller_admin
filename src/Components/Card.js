import React from 'react'
// import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div>{props.children}</div>
    // className={`${classes.card} ${props.className}`}
  )
}

export default Card