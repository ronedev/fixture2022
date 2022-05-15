import { semisContext } from 'components/context/semisContext'
import React, { useContext } from 'react'
import Semis from './Semis'

const Cuartos = ({ cuartosA, cuartosB }) => {

    const { semisA, semisB } = useContext(semisContext)

    return (
        <>
            <CuartosRonda cuartosEquipos={cuartosA} grupo={'A'} />
            <Semis semisA={semisA} semisB={semisB} />
            <CuartosRonda cuartosEquipos={cuartosB} grupo={'B'} />
        </>
    )
}

const CuartosRonda = ({ cuartosEquipos, grupo }) => {

    const { semisA, semisB, setCountrySemis } = useContext(semisContext)

    return (
        <div className='cuartos'>
            <h3 className='title'>Cuartos {grupo}</h3>
            {cuartosEquipos.map((country, idx) => {
                let esPar = idx % 2 === 0
                return (
                    country ?
                        <>
                            {esPar && idx !== 0 && <span className='espacio'></span>}
                            <button className={
                                semisA.includes(country) || semisB.includes(country) ? 'country title success' : 'country title'} 
                            onClick={
                                () => setCountrySemis(idx, country, grupo)
                            }>
                                <img src={country.flag} alt="flag icon" />
                                {country.name}
                            </button>
                            {esPar && <h2 className='title' style={{ 'margin': 0 }}>VS</h2>}
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

export default Cuartos