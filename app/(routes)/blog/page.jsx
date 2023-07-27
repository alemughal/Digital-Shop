'use client'

import React from 'react'

const Blog = () => {
    function abc(){
        alert("I am Ali");
    }
  return (
    <>
        <h1>Blog Page</h1>
        <button onClick={abc}>Click Me</button>
    </>
  )
}

export default Blog
