import { clasificadosContext } from 'components/context/clasificadosContext'
import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import Semis from './Semis'

const Cuartos = ({ cuartosA, cuartosB }) => {

    const { clasificados } = useContext(clasificadosContext)

    return (
        <>
            <CuartosRonda cuartosEquipos={cuartosA} grupo={'A'} />
            <Semis semisA={clasificados.semis.A} semisB={clasificados.semis.B} />
            <CuartosRonda cuartosEquipos={cuartosB} grupo={'B'} />
        </>
    )
}

const CuartosRonda = ({ cuartosEquipos, grupo }) => {

    const { clasificados, setCountrySemis } = useContext(clasificadosContext)

    return (
        <div className='cuartos'>
            <h3 className='title'>
                <FormattedMessage 
                    id='knockout.quarter'
                    defaultMessage='Quarter finals'
                />
                 {grupo}</h3>
            {cuartosEquipos.map((country, idx) => {
                let esPar = idx % 2 === 0
                return (
                    country.length > 0 ?
                        <>
                            {esPar && idx !== 0 && <span className='espacio'></span>}
                            <button className={
                                clasificados.semis.A.includes(country) || clasificados.semis.B.includes(country) ? 'country title success' : 'country title'} 
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