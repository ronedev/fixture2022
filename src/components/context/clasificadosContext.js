import { getGrupoName } from "components/hooks/getGrupoName";
import React, { useContext, useState } from "react";
import { errorsContext } from "./errorsContext";

const clasificadosContext = React.createContext()

const ClasificadosProvider = ({ children }) => {
    const [grupoA, setGrupoA] = useState([])
    const [grupoB, setGrupoB] = useState([])
    const [grupoC, setGrupoC] = useState([])
    const [grupoD, setGrupoD] = useState([])
    const [grupoE, setGrupoE] = useState([])
    const [grupoF, setGrupoF] = useState([])
    const [grupoG, setGrupoG] = useState([])
    const [grupoH, setGrupoH] = useState([])

    const { addError } = useContext(errorsContext)

    const clasificados = [
        grupoA,
        grupoB,
        grupoC,
        grupoD,
        grupoE,
        grupoF,
        grupoG,
        grupoH,
    ]

    const setCountry = (grupo, country) => {
        console.log(clasificados)
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

    const validateClasificados = () => {
        //Array local de errores
        let errores = []
        addError(errores)

        //Se evalua cada grupo si poseé menos de 2 grupos clasificados se agrega error al array
        for (let i = 0; i < clasificados.length; i++) {

            let group = clasificados[i]
            console.log(group)
            
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
    return (
        <clasificadosContext.Provider value={{
            clasificados: clasificados,
            setCountry: setCountry,
            validateClasificados: validateClasificados
        }}>
            {children}
        </clasificadosContext.Provider>
    )
}

export { ClasificadosProvider, clasificadosContext }