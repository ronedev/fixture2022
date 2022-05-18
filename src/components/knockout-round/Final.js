import { clasificadosContext } from 'components/context/clasificadosContext'
import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'

const Final = ({ finalistas, tercerPuesto }) => {

    const {clasificados, setGanadores } = useContext(clasificadosContext)

    return (
        <div className='finalContainer'>
            <div className='final'>
                <h3 className='title'>
                    <FormattedMessage 
                        id='knockout.final.final'
                        defaultMessage='Final'
                    />
                </h3>
                {finalistas.map((country, idx) => {
                    let esPar = idx % 2 === 0
                    return (
                        Object.values(country).length > 0 ?
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
                <h3 className='title'>
                    <FormattedMessage 
                        id='knockout.final.thirdPlace'
                        defaultMessage='Third place'
                    />
                </h3>
                {tercerPuesto.map((country, idx) => {
                    let esPar = idx % 2 === 0
                    return (
                        Object.values(country).length > 0 ?
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