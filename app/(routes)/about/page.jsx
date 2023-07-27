'use client'

import React from 'react'

const about = () => {
    function abc(){
        alert("I am Ali");
    }
  return (
    <>
        <h1>About Page</h1>
        <button onClick={abc}>Click Me</button>
    </>
  )
}

export default about
