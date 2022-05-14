import { clasificadosContext } from 'components/context/clasificadosContext'
import { cuartosContext } from 'components/context/cuartosContext'
import React, { useContext } from 'react'
import Cuartos from './Cuartos'

const KnockoutRound = ({ countrys }) => {
    const { clasificados } = useContext(clasificadosContext)

    const {setCountryCuartos, cuartosA, cuartosB} = useContext(cuartosContext)
    console.log(cuartosA, cuartosB)

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
            <div className='octavos'>
                {getOctavosA().map((country, idx) => {
                    return (
                        <>
                            <button className='country title' onClick={
                                () => setCountryCuartos(idx, country, 'A')
                            }>
                                <img src={country.flag} alt="flag icon" />
                                {country.name}
                            </button>
                        </>
                    )
                })}
            </div>
            <Cuartos cuartosA={cuartosA} cuartosB={cuartosB}/>
            <div className='octavos'>
                {getOctavosB().map((country, idx) => {
                    return (
                        <>
                            <button className='country title' onClick={
                                () => setCountryCuartos(idx, country, 'B')
                            }>
                                <img src={country.flag} alt="flag icon" />
                                {country.name}
                            </button>
                        </>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default KnockoutRound