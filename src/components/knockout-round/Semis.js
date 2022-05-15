import { finalContext } from 'components/context/finalContext'
import React, { useContext } from 'react'
import Final from './Final'

const Semis = ({ semisA, semisB }) => {

    const { finalistas, tercerPuesto } = useContext(finalContext)

    return (
        <>
            <SemisRonda equiposSemis={semisA} grupo={'A'}/>
            <Final tercerPuesto={tercerPuesto} finalistas={finalistas} />
            <SemisRonda equiposSemis={semisB} grupo={'B'}/>
        </>
    )
}

const SemisRonda = ({ equiposSemis, grupo }) => {

    const { finalistas, setCountryFinal } = useContext(finalContext)

    return (
        <div className='semis'>
            <h3 className='title'>Semis {grupo}</h3>
            {equiposSemis.map((country, idx) => {
                let esPar = idx % 2 === 0
                return (
                    country ?
                        <>
                            <button className={
                                finalistas.includes(country) ? 'country title success' : 'country title'} 
                            onClick={
                                () => setCountryFinal(idx, country, grupo, equiposSemis[idx === 0 ? 1 : 0])
                            }>
                                <img src={country.flag} alt="flag icon" />
                                {country.name}
                            </button>
                            {esPar && <h2 className='title' style={{'margin': 0}}>VS</h2>}
                        </>
                        :
                        <>
                            <button className='country vacio'>{' '}</button>
                        </>
                )

            }
            )}
        </div>
    )
}

export default Semis