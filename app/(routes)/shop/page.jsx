'use client'

import React from 'react'

const Shop = () => {
    function abc(){
        alert("I am Ali");
    }
  return (
    <>
        <h1>Shop Page</h1>
        <button onClick={abc}>Click Me</button>
    </>
  )
}

export default Shop
