import React from 'react'
import Cards from './Cards'

function Personajes() {
  console.log()
  return (
    <div>
      <Cards />

      <form onSubmit={next}>
        <button type="submit">Next</button>
      </form>

      <form onSubmit={prev}>
        <button type="submit">Prev</button>
      </form>
    </div>
  )
}

export default Personajes

function next(e) {
  e.preventDefault()
 // window.apiPeople(window.nextBtn)
  console.log(window.nextBtn)
}

function prev(e) {
  e.preventDefault()
  window.apiPeople(window.prevBtn)
  console.log(window.prevBtn)
}