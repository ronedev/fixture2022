import React, { useContext, useEffect, useState } from 'react'
import Groups from './Groups'
import { listadoPaises } from './listadoPaises'
import toast, { Toaster } from 'react-hot-toast'
import { errorsContext } from 'components/context/errorsContext'
import { clasificadosContext } from 'components/context/clasificadosContext'
import KnockoutRound from 'components/knockout-round/KnockoutRound'
import { FormattedMessage } from 'react-intl'

const GroupStage = () => {

  //Estado donde se almacenaran los paises
  const [countrys, setCountrys] = useState([])

  //Estado para pasar a la siguiente ronda
  const [nextRound, setNextRound] = useState(false)

  const { errores } = useContext(errorsContext)
  const { validateClasificados } = useContext(clasificadosContext)

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
    <>
      {nextRound ? <KnockoutRound countrys={countrys} /> :
        <section className='groupStageContainer'>
          <div className='examplesContainer'>
            <h4 className='text'>
              <FormattedMessage
                id='groupStage.first'
                defaultMessage='First place'
              />
              <br />
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
            <h4 className='text'>
              <FormattedMessage
                id='groupStage.second'
                defaultMessage='Second place'
              />
              <br />
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
            <h4 className='text'>
              <FormattedMessage
                id='groupStage.removed'
                defaultMessage='Removed'
              />
              <br />
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
            <button className='btn1' onClick={() => {
              if (validateClasificados() === true) {
                setNextRound(true)
              } else {
                if (errores.length > 0) {
                  toast(errores[0])
                }
              }
            }}>
              <FormattedMessage 
                id='groupStage.btnNextRound'
                defaultMessage='Next round'
              />
            </button>
          </div>
          <Toaster toastOptions={
            {
              style: {
                color: '#1E213A',
                fontFamily: 'Raleway',
                fontWeight: '500',
                backgroundColor: '#C7B95A',
                fontSize: '12px'
              }
            }
          } />
        </section>
      }
    </>
  )
}

export default GroupStage