import React, { useEffect, useState } from 'react'
import Groups from './Groups'
import { listadoPaises } from './listadoPaises'

const GroupStage = () => {

  //Estado donde se almacenaran los paises
  const [countrys, setCountrys] = useState([])

  useEffect(() => {
    //Funcion que trae a los paises desde la api
    const getCountrys = async () => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      let paises = []
      await fetch(`https://restcountries.com/v3.1/all`, requestOptions)
        .then(response => response.json())
        .then(res => paises = res)
        .catch(error => console.log(`Ha ocurrido un error al hacer la llamada a los paises en Group Stage: ${error}`));

      return paises
    }

    getCountrys().then(res => {
      //Se filtra entre todos los paises los paises clasificados
      let countrysFilter = res.filter(country => listadoPaises.includes(country.name.common))
      setCountrys(countrysFilter)
    })
  }, [])

  return (
    <section className='groupStageContainer'>
      <div className='examplesContainer'>
        <h4 className='text'>Primero<br />
          <button className='country success'>
            {/* Si country contiene algo se ejecuta el contenido */}
            {countrys.length > 0 &&
              <>
                <img src={countrys[21].flags.png} alt="flag icon" />
                {countrys[21].fifa}
              </>
            }
          </button>
        </h4>
        <h4 className='text'>Segundo<br />
          <button className='country warning'>
            {/* Si country contiene algo se ejecuta el contenido */}
          {countrys.length > 0 &&
              <>
                <img src={countrys[9].flags.png} alt="flag icon" />
                {countrys[9].fifa}
              </>
            }
          </button>
        </h4>
        <h4 className='text'>Eliminado<br />
          <button className='country error'>
            {/* Si country contiene algo se ejecuta el contenido */}
          {countrys.length > 0 &&
              <>
                <img src={countrys[2].flags.png} alt="flag icon" />
                {countrys[2].fifa}
              </>
            }
          </button>
        </h4>
      </div>
      <div className='groupsGrid'>
        <Groups countrys={countrys} />
      </div>
      <div className='btnContainer'>
        <button className='btn1'>Siguiente ronda</button>
      </div>
    </section>
  )
}

export default GroupStage