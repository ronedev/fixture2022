import { getGrupoName } from "components/hooks/getGrupoName";
import React, { useContext, useState } from "react";
import { errorsContext } from "./errorsContext";
import { db } from "firebaseConfig";
import { v4 as uuidv4 } from 'uuid';

const clasificadosContext = React.createContext()

const ClasificadosProvider = ({ children }) => {

    const { addError } = useContext(errorsContext)

    //Estados de octavos
    const [grupoA, setGrupoA] = useState([])
    const [grupoB, setGrupoB] = useState([])
    const [grupoC, setGrupoC] = useState([])
    const [grupoD, setGrupoD] = useState([])
    const [grupoE, setGrupoE] = useState([])
    const [grupoF, setGrupoF] = useState([])
    const [grupoG, setGrupoG] = useState([])
    const [grupoH, setGrupoH] = useState([])
    //Estados de cuartos
    const [equipo1A, setEquipo1A] = useState([])
    const [equipo1B, setEquipo1B] = useState([])
    const [equipo2A, setEquipo2A] = useState([])
    const [equipo2B, setEquipo2B] = useState([])
    const [equipo3A, setEquipo3A] = useState([])
    const [equipo3B, setEquipo3B] = useState([])
    const [equipo4A, setEquipo4A] = useState([])
    const [equipo4B, setEquipo4B] = useState([])
    //Estados de semis
    const [equipo1ASemis, setEquipo1ASemis] = useState([])
    const [equipo1BSemis, setEquipo1BSemis] = useState([])
    const [equipo2ASemis, setEquipo2ASemis] = useState([])
    const [equipo2BSemis, setEquipo2BSemis] = useState([])
    //Estados de final y tercer puesto
    const [equipoBFinal, setEquipoBFinal] = useState([])
    const [equipoAFinal, setEquipoAFinal] = useState([])
    const [terceroA, setTerceroA] = useState([])
    const [terceroB, setTerceroB] = useState([])
    //Estado de ganadores ultimas rondas
    const [ganadorFinal, setGanadorFinal] = useState([])
    const [ganadorTercerPuesto, setGanadorTercerPuesto] = useState([])


    const clasificados = {
        octavos: {
            A: grupoA,
            B: grupoB,
            C: grupoC,
            D: grupoD,
            E: grupoE,
            F: grupoF,
            G: grupoG,
            H: grupoH,
        },
        cuartos: {
            A: [
                equipo1A,
                equipo2A,
                equipo3A,
                equipo4A
            ],
            B: [
                equipo1B,
                equipo2B,
                equipo3B,
                equipo4B
            ]
        },
        semis: {
            A: [
                equipo1ASemis,
                equipo2ASemis
            ],
            B: [
                equipo1BSemis,
                equipo2BSemis
            ]
        },
        final: {
            finalistas: [
                equipoAFinal,
                equipoBFinal
            ],
            tercerPuesto: [
                terceroA,
                terceroB
            ]
        },
        ganadores: {
            ganador: ganadorFinal,
            tercero: ganadorTercerPuesto
        }
    }

    const setCountryOctavos = (grupo, country) => {
        switch (grupo) {
            case 'A':
                //Se evalua si el grupo ya tiene 2 equipos seleccionados como primero y segundo
                if (grupoA.length < 2) {
                    setGrupoA(grupoA => [...grupoA, country])
                } else {
                    //En caso de que se tenga los dos grupos ya seleccionaods se reemplaza el primero por el equipo seleccionado
                    setGrupoA([country])
                }
                break
            case 'B':
                if (grupoB.length < 2) {
                    setGrupoB(grupoB => [...grupoB, country])
                } else {
                    setGrupoB([country])
                }
                break
            case 'C':
                if (grupoC.length < 2) {
                    setGrupoC(grupoC => [...grupoC, country])
                } else {
                    setGrupoC([country])
                }
                break
            case 'D':
                if (grupoD.length < 2) {
                    setGrupoD(grupoD => [...grupoD, country])
                } else {
                    setGrupoD([country])
                }
                break
            case 'E':
                if (grupoE.length < 2) {
                    setGrupoE(grupoE => [...grupoE, country])
                } else {
                    setGrupoE([country])
                }
                break
            case 'F':
                if (grupoF.length < 2) {
                    setGrupoF(grupoF => [...grupoF, country])
                } else {
                    setGrupoF([country])
                }
                break
            case 'G':
                if (grupoG.length < 2) {
                    setGrupoG(grupoG => [...grupoG, country])
                } else {
                    setGrupoG([country])
                }
                break
            case 'H':
                if (grupoH.length < 2) {
                    setGrupoH(grupoH => [...grupoH, country])
                } else {
                    setGrupoH([country])
                }
                break
            default:

        }
    }

    const setCountryCuartos = (ronda, country, grupo) => {

        switch (ronda) {
            case 0:
                if (grupo === 'A') {
                    setEquipo1A(country)
                } else if (grupo === 'B') {
                    setEquipo1B(country)
                }
                break
            case 1:
                if (grupo === 'A') {
                    setEquipo1A(country)
                } else if (grupo === 'B') {
                    setEquipo1B(country)
                }
                break
            case 2:
                if (grupo === 'A') {
                    setEquipo2A(country)
                } else if (grupo === 'B') {
                    setEquipo2B([country])
                }
                break
            case 3:
                if (grupo === 'A') {
                    setEquipo2A([country])
                } else if (grupo === 'B') {
                    setEquipo2B(country)
                }
                break
            case 4:
                if (grupo === 'A') {
                    setEquipo3A(country)
                } else if (grupo === 'B') {
                    setEquipo3B(country)
                }
                break
            case 5:
                if (grupo === 'A') {
                    setEquipo3A(country)
                } else if (grupo === 'B') {
                    setEquipo3B(country)
                }
                break
            case 6:
                if (grupo === 'A') {
                    setEquipo4A(country)
                } else if (grupo === 'B') {
                    setEquipo4B(country)
                }
                break
            case 7:
                if (grupo === 'A') {
                    setEquipo4A(country)
                } else if (grupo === 'B') {
                    setEquipo4B(country)
                }
                break
            default:

        }
    }

    const setCountrySemis = (ronda, country, grupo) => {
        switch (ronda) {
            case 0:
                if (grupo === 'A') {
                    setEquipo1ASemis(country)
                } else if (grupo === 'B') {
                    setEquipo1BSemis(country)
                }
                break
            case 1:
                if (grupo === 'A') {
                    setEquipo1ASemis(country)
                } else if (grupo === 'B') {
                    setEquipo1BSemis(country)
                }
                break
            case 2:
                if (grupo === 'A') {
                    setEquipo2ASemis(country)
                } else if (grupo === 'B') {
                    setEquipo2BSemis(country)
                }
                break
            case 3:
                if (grupo === 'A') {
                    setEquipo2ASemis(country)
                } else if (grupo === 'B') {
                    setEquipo2BSemis(country)
                }
                break
            default:

        }
    }

    const setCountryFinal = (ronda, country, grupo, tercero) => {
        switch (ronda) {
            case 0:
                if (grupo === 'A') {
                    setEquipoAFinal(country)
                    setTerceroA(tercero)
                } else if (grupo === 'B') {
                    setEquipoBFinal(country)
                    setTerceroB(tercero)
                }
                break
            case 1:
                if (grupo === 'A') {
                    setEquipoAFinal(country)
                    setTerceroA(tercero)
                } else if (grupo === 'B') {
                    setEquipoBFinal(country)
                    setTerceroB(tercero)
                }
                break
            default:

        }
    }

    const setGanadores = (country, ronda) => {
        switch (ronda) {
            case 'final':
                setGanadorFinal([country])
                break
            case 'tercerPuesto':
                setGanadorTercerPuesto([country])
                break
            default:

        }

    }

    const validateClasificados = () => {
        //Array local de errores
        let errores = []
        addError(errores)

        //Se evalua cada grupo si poseé menos de 2 grupos clasificados se agrega error al array
        for (let i = 0; i < clasificados.octavos.length; i++) {

            let group = clasificados.octavos[i]

            if (group.length < 2) {
                errores.push(`Debe seleccionar primero y segundo del grupo ${getGrupoName(i)}`)
            }
        }

        //Si el array de errores no contiene errores devuelve true, sino agrega los errores al contexto y devuelve false
        if (errores.length === 0) {
            return true
        } else {
            return addError(errores)
        }
    }

    const validateFinalizar = () => {
        //Array local de errores
        let errores = []
        addError(errores)

        //Se evalua si quedan equipos sin seleccionar en la ronda de octavos
        clasificados.cuartos.A.forEach(equipoCuartos => {
            if (Object.keys(equipoCuartos).length === 0) {
                errores.push('Le quedan equipos por clasificar a cuartos')
            }
        })
        clasificados.cuartos.B.forEach(equipoCuartos => {
            if (Object.keys(equipoCuartos).length === 0) {
                errores.push('Le quedan equipos por clasificar a cuartos')
            }
        })

        //Se evalua si quedan equipos sin seleccionar en la ronda de cuartos
        clasificados.semis.A.forEach(equipoSemis => {
            if (Object.keys(equipoSemis).length === 0) {
                errores.push('Le quedan equipos por clasificar a semis')
            }
        })
        clasificados.semis.B.forEach(equipoSemis => {
            if (Object.keys(equipoSemis).length === 0) {
                errores.push('Le quedan equipos por clasificar a semis')
            }
        })

        //Se evalua si quedan equipos sin seleccionar en la ronda de semis
        clasificados.final.finalistas.forEach(equipoFinalista => {
            if (Object.keys(equipoFinalista).length === 0) {
                errores.push('Le quedan equipos por clasificar a la final')
            }
        })
        clasificados.final.tercerPuesto.forEach(equipoFinalista => {
            if (Object.keys(equipoFinalista).length === 0) {
                errores.push('Le quedan equipos por clasificar a la final')
            }
        })

        //Se evalua que se hayan seleccionado un ganador de primer y tercer puesto
        if (!clasificados.ganadores.ganador.length > 0) {
            errores.push('Debe completar la predicción para finalizar')
        }

        if (errores.length === 0) {
            return true
        } else {
            addError(errores)
            return false
        }
    }

    const setPrediction = async () => {
        const idPrediction = uuidv4()
        const data = {
            octavos: [grupoA[0],grupoA[1],grupoB[0],grupoB[1],grupoC[0],grupoC[1],grupoD[0],grupoD[1],grupoE[0],grupoE[1],grupoF[0],grupoF[1],grupoG[0],grupoG[1],grupoH[0],grupoH[1]],
            cuartosA: [equipo1A, equipo2A, equipo3A, equipo4A],
            cuartosB: [equipo1B, equipo2B, equipo3B, equipo4B],
            semisA: [equipo1ASemis, equipo2ASemis],
            semisB: [equipo1BSemis, equipo2BSemis],
            final: clasificados.final,
            ganadores: clasificados.ganadores,
            id: idPrediction
        }
        localStorage.setItem('idPrediction', idPrediction)
        await db.firestore().collection('predictions').doc(idPrediction).set(data)
            .then(res => {
                window.location = '/finish'
            })
    }
    return (
        <clasificadosContext.Provider value={{
            clasificados: clasificados,
            setCountryOctavos: setCountryOctavos,
            setCountryCuartos: setCountryCuartos,
            setCountrySemis: setCountrySemis,
            setCountryFinal: setCountryFinal,
            setGanadores: setGanadores,
            validateClasificados: validateClasificados,
            validateFinalizar: validateFinalizar,
            setPrediction: setPrediction
        }}>
            {children}
        </clasificadosContext.Provider>
    )
}

export { ClasificadosProvider, clasificadosContext }