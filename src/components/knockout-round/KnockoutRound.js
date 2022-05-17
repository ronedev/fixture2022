import { clasificadosContext } from 'components/context/clasificadosContext'
import { errorsContext } from 'components/context/errorsContext'
import React, { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Cuartos from './Cuartos'

const KnockoutRound = () => {

    const { clasificados, validateFinalizar, setPrediction } = useContext(clasificadosContext)

    const { errores } = useContext(errorsContext)

    const getOctavosA = () => {
        let octavosA = []
        const octavos = Object.values(clasificados.octavos)
        octavos.forEach((grupo, idx) => {
            //Si el id es par se devolverá el primero del grupo y si el id es impar se devolvera el segundo
            const esPar = idx % 2 === 0
            esPar ? octavosA.push(grupo[0]) : octavosA.push(grupo[1])
        })

        return octavosA
    }

    const getOctavosB = () => {
        let octavosB = []
        const octavos = Object.values(clasificados.octavos)
        octavos.forEach((grupo, idx) => {
            //Si el id es par se devolverá el primero del grupo y si el id es impar se devolvera el segundo
            const esPar = idx % 2 === 0
            esPar ? octavosB.push(grupo[1]) : octavosB.push(grupo[0])
        })

        return octavosB
    }

    return (
        <>
        <section className='knockoutRound'>
            <Octavos octavosEquipos={getOctavosA()} grupo={'A'} />
            <Cuartos cuartosA={clasificados.cuartos.A} cuartosB={clasificados.cuartos.B}/>
            <Octavos octavosEquipos={getOctavosB()} grupo={'B'} />
        </section>
        <div className='btnFinalizarContainer'>
            <button className='btn1' onClick={() => {
                if(validateFinalizar()){
                    setPrediction()
                }else{
                    if(errores.length>0){
                        toast(errores[0])
                    }else{
                        toast('Debe completar correctamente la predicción para finalizar')
                    }
                }
            }}>Finalizar</button>
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
        </>
    )
}

const Octavos = ({octavosEquipos, grupo})=>{

    const {setCountryCuartos, clasificados} = useContext(clasificadosContext)
    
    return(
        <div className='octavos'>
            <h3 className='title'>Octavos {grupo}</h3>
                {octavosEquipos.map((country, idx) => {
                    let esPar = idx % 2 === 0
                    return (
                        <>
                            {esPar && idx !== 0 && <span className='espacio'></span>}
                            <button className={
                                clasificados.cuartos.A.includes(country) || clasificados.cuartos.B.includes(country) ? 'country title success' : 'country title'}
                            onClick={
                                () => setCountryCuartos(idx, country, grupo)
                            }>
                                <img src={country.flag} alt="flag icon" />
                                {country.name}
                            </button>
                            {esPar && <h2 className='title' style={{'margin': 0}}>VS</h2>}
                        </>
                    )
                })}
            </div>
    )
}

export default KnockoutRound