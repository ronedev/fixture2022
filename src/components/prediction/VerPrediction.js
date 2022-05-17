import { db } from 'firebaseConfig'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VerPrediction = () => {

    const { userId } = useParams()

    const [userPrediction, setUserPrediction] = useState()

    const getPrediction = async () => {
        const prediction = await db.firestore().collection('predictions').doc(userId).get()
        setUserPrediction(prediction.data())
    }

    const getOctavosA = () => {
        let octavosA = []
        const octavos = userPrediction.octavos
        for (let i = 0; i < octavos.length; i) {
            const esPar = i % 2 === 0
            octavosA.push(octavos[i])
            esPar ? i = i + 3 : i = i + 1
        }
        return octavosA
    }

    const getOctavosB = () => {
        let octavosB = []
        const octavos = userPrediction.octavos
        for (let i = 1; i < octavos.length; i) {
            const esPar = i % 2 === 0
            octavosB.push(octavos[i])
            esPar ? i = i + 3 : i = i + 1
        }
        return octavosB
    }

    console.log(userPrediction)

    useEffect(() => {
        getPrediction()
    },)
    return (
        <section className='knockoutRound'>
            {userPrediction &&
                <>
                    <Octavos octavosEquipos={getOctavosA()} grupo={'A'} cuartos={userPrediction.cuartosA} />
                    <Octavos octavosEquipos={getOctavosB()} grupo={'B'} cuartos={userPrediction.cuartosB} />
                </>
            }
        </section>
    )
}

const Octavos = ({ octavosEquipos, grupo, cuartos }) => {

    console.log(cuartos)
    return (
        <div className='octavos'>
            <h3 className='title'>Octavos {grupo}</h3>
            {octavosEquipos.map((country, idx) => {
                let esPar = idx % 2 === 0
                let estaEnCuartos = cuartos.map(cuartoPais => cuartoPais.name === country.name ? true : false)
                return (
                    <>
                        {esPar && idx !== 0 && <span className='espacio'></span>}
                        <button className={
                            estaEnCuartos.includes(true) ? 'country title success' : 'country title'}
                            onClick={
                                () => null
                            }>
                            <img src={country.flag} alt="flag icon" />
                            {country.name}
                        </button>
                        {esPar && <h2 className='title' style={{ 'margin': 0 }}>VS</h2>}
                    </>
                )
            })}
        </div>
    )
}

export default VerPrediction