import React from 'react'

//recibe el objeto myCard y myIndx
function card({myCard,myIndx}) {  
  return (

    //estructura de card y asignacion de objetos en sus componentes
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
            <h4 className='card-title'> {myCard.name+(myIndx-1)} </h4>
            <p className='card-text text-secondary'> Altura: {myCard.height}</p>
            <p className='card-text text-secondary'> Peso: {myCard.mass}</p>
            <p className='card-text text-secondary'> Fecha de nacimiento: {myCard.birth_year}</p>
          
              <button type="submit" onClick={()=> { 
              window.favoritos.push(myCard)
              }}>Añadir a Favoritos</button>        
           
        </div>
    </div>
  )
}
           // <a onSubmit={fav} className="btn btn-outline-secondary" >Añadir a favoritos</a>

export default card
