import { clasificadosContext } from 'components/context/clasificadosContext'
import React, { useContext } from 'react'

const Final = ({ finalistas, tercerPuesto }) => {

    const {clasificados, setGanadores } = useContext(clasificadosContext)

    return (
        <div className='finalContainer'>
            <div className='final'>
                <h3 className='title'>Final</h3>
                {finalistas.map((country, idx) => {
                    let esPar = idx % 2 === 0
                    return (
                        country ?
                            <>
                                <button className={
                                    clasificados.ganadores.ganador.includes(country) ? 'country title success' : 'country title'
                                } 
                                onClick={
                                    () => setGanadores(country, 'final')
                                }>
                                    <img src={country.flag} alt="flag icon" />
                                    {country.name}
                                </button>
                                {esPar && <h2 className='title' style={{ 'margin': 0 }}>VS</h2>}
                            </>
                            :
                            <>
                                <button className='country vacio'>{'  '}</button>
                            </>
                    )
                })}
            </div>
            <div className='tercer'>
                <h3 className='title'>Tercer puesto</h3>
                {tercerPuesto.map((country, idx) => {
                    let esPar = idx % 2 === 0
                    return (
                        country ?
                            <>
                                <button className={
                                    clasificados.ganadores.tercero.includes(country) ? 'country title success' : 'country title'
                                } 
                                onClick={
                                    () => setGanadores(country, 'tercerPuesto')
                                }>
                                    <img src={country.flag} alt="flag icon" />
                                    {country.name}
                                </button>
                                {esPar && <h2 className='title' style={{ 'margin': 0 }}>VS</h2>}
                            </>
                            :
                            <>
                                <button className='country vacio'>{'  '}</button>
                            </>
                    )
                })}
            </div>
        </div>
    )
}

export default Final