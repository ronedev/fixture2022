import React from 'react'

const Cuartos = ({ cuartosA, cuartosB }) => {

    return (
        <>
            <div className='cuartos'>
                {cuartosA.map((country) => {
                    return (
                        country ?
                            <>
                                <button className='country title' onClick={
                                    () => { }
                                }>
                                    <img src={country.flag} alt="flag icon" />
                                    {country.name}
                                </button>
                            </>
                            :
                            <>
                                <button className='country vacio'>{'  '}</button>
                            </>
                    )

                }
                )}
            </div>
            <div className='cuartos'>
                {cuartosB.map((country) => {
                    return (
                        country ?
                            <>
                                <button className='country title' onClick={
                                    () => { }
                                }>
                                    <img src={country.flag} alt="flag icon" />
                                    {country.name}
                                </button>
                            </>
                            :
                            <>
                                <button className='country vacio'>{' '}</button>
                            </>
                    )

                }
                )}
            </div>
        </>
    )
}

export default Cuartos