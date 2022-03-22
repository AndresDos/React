import React, {useEffect , useState} from 'react';
//importo card para poder utilizar los atributos de card 
import Card from './Card'

function Cards() {

    var urlPeople = ''
    window.favoritos = []
    window.indx=0

    //Funcion api(trae la informacion de api)
    const apiBase = async (url) => {
    //consume el api y lo asigna a la variable api
    const api = await fetch(url)
    //transforma los datos a tipo json y los asigna a responseJSON
    const responseJSON = await api.json()
    //a falta de bandera ok no hay validacion
    urlPeople=responseJSON.people
    //console.log(urlPeople)
    window.apiPeople(urlPeople)
    }

    const [pers, setPers] =useState([])

        //Funcion array(trae informacion dentro de api)
        window.apiPeople = async (url) => {
        const apipersonajes = await fetch(url)
        //tenemos la definicion de lo que se obtiene es un arreglo en results 
        const responseJSON = await apipersonajes.json()
        //a falta de bandera ok no hay validacion
        setPers(responseJSON.results)

        //asigna los datos del responseJSON de los atributos next y previo 
        window.nextBtn=responseJSON.next
        window.prevBtn=responseJSON.previous
        //console.log(responseJSON)
        }

    useEffect(() => {
        apiBase('https://swapi.dev/api')
    }, [])  

  return (
//crea un contenedor para las card
<div className='container d-flex justify-content-center h-100 align-items-center'>
<div className='row'>
    { 
    
        //la funcion map recorre todos los datos de cards
        pers.map((card) => (
            //asigna los datos en una variable para que pueda utilizarlas en card
            <div className="col-md-3" key={card.name}>
                <Card myCard={card} myIndx= {window.indx=window.indx+1} isFav={false}/> 
                <br />
            </div> 
        ))
    }
</div>
</div>
  ) 
}

export default Cards
