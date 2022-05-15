import { clasificadosContext } from 'components/context/clasificadosContext'
import { cuartosContext } from 'components/context/cuartosContext'
import React, { useContext } from 'react'
import Cuartos from './Cuartos'

const KnockoutRound = () => {
    const { clasificados } = useContext(clasificadosContext)

    const {cuartosA, cuartosB} = useContext(cuartosContext)

    const getOctavosA = () => {
        let octavosA = []
        clasificados.forEach((grupo, idx) => {
            //Si el id es par se devolverá el primero del grupo y si el id es impar se devolvera el segundo
            const esPar = idx % 2 === 0
            esPar ? octavosA.push(grupo[0]) : octavosA.push(grupo[1])
        })

        return octavosA
    }

    const getOctavosB = () => {
        let octavosB = []
        clasificados.forEach((grupo, idx) => {
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
            <Cuartos cuartosA={cuartosA} cuartosB={cuartosB}/>
            <Octavos octavosEquipos={getOctavosB()} grupo={'B'} />
        </section>
        <div className='btnFinalizarContainer'>
            <button className='btn1'>Finalizar</button>
        </div>
        </>
    )
}

const Octavos = ({octavosEquipos, grupo})=>{

    const {setCountryCuartos, cuartosA, cuartosB} = useContext(cuartosContext)
    
    return(
        <div className='octavos'>
            <h3 className='title'>Octavos {grupo}</h3>
                {octavosEquipos.map((country, idx) => {
                    let esPar = idx % 2 === 0
                    return (
                        <>
                            {esPar && idx !== 0 && <span className='espacio'></span>}
                            <button className={
                                cuartosA.includes(country) || cuartosB.includes(country) ? 'country title success' : 'country title'}
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