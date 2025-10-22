import React, { useState } from 'react'

function Button(props) {
    const [count, setcount]=useState(0);
  return (
    <div>
        <p>{props.compteur}</p>
      <button onClick={() => setcount(count + 1) }>Incrementation</button>
      <button onClick={() => setcount(count, - 1)}>Decrementation</button>
    </div>
  )
}

export default Button
