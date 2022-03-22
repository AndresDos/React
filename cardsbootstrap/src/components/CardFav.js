import React from 'react'

//recibe el objeto myCard y myIndx
function card({myCard,myIndx}) {  

  return (

    //estructura de cardFav
    <div className='card text-center bg-dark' id={(myIndx-1)}>
        <div className='card-body text-light'>
            <h4 className='card-title'> {myCard.name} </h4>
            <p className='card-text text-secondary'> Altura: {myCard.height}</p>
            <p className='card-text text-secondary'> Peso: {myCard.mass}</p>
            <p className='card-text text-secondary'> Fecha de nacimiento: {myCard.birth_year}</p>
          
              <button type="submit" onClick={()=> {
            
            if(
            window.favoritos!=null
             ){
              window.favoritos.splice(myIndx,1)
              var div=document.getElementById((myIndx-1))
                div.remove()
            }            
              }}>Eliminar de Favoritos</button>
           
        </div>
    </div>
  )
}

export default card