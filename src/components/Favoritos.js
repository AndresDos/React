import React from 'react'
import CardFav from './CardFav'

function Favoritos() {

  window.indx=0

  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
      <div className='row'>

      {  
      (window.favoritos!=null) ? (
    
         //la funcion map recorre todos los datos de cards
         window.favoritos.map((card) => (
          //asigna los datos en una variable para que pueda utilizarlas en card
          <div className="col-md-3" key={card.name}>
             < CardFav myCard={card} myIndx= {window.indx=window.indx+1} isFav={true} />
              <br />
          </div> 
          ))
      )
      :
      (null)

      }

      </div>
    </div>
      
  )
}

/** //la funcion map recorre todos los datos de cards
        window.favoritos.map((card) => (
        //asigna los datos en una variable para que pueda utilizarlas en card
        <div className="col-md-3" key={card.name}>
           < CardFav myCard={card} myIndx= {window.indx=window.indx+1} isFav={true} />
            <br />
        </div> 
        ))
       */
export default Favoritos
