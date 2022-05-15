import React, { useState } from "react";

const semisContext = React.createContext()

const SemisProvider = ({children})=>{

    const [equipo1A, setEquipo1A] = useState()
    const [equipo1B, setEquipo1B] = useState()
    const [equipo2A, setEquipo2A] = useState()
    const [equipo2B, setEquipo2B] = useState()

    let semisA = [
        equipo1A,
        equipo2A
    ]

    let semisB = [
        equipo1B,
        equipo2B
    ]

    const setCountrySemis = (ronda, country, grupo)=>{
        switch(ronda){
            case 0:
                if(grupo === 'A'){
                    setEquipo1A(country)
                }else if(grupo === 'B'){
                    setEquipo1B(country)
                }
                break
            case 1:
                if(grupo === 'A'){
                    setEquipo1A(country)
                }else if(grupo === 'B'){
                    setEquipo1B(country)
                }
                break
            case 2:
                if(grupo === 'A'){
                    setEquipo2A(country)
                }else if(grupo === 'B'){
                    setEquipo2B(country)
                }
                break
            case 3:
                if(grupo === 'A'){
                    setEquipo2A(country)
                }else if(grupo === 'B'){
                    setEquipo2B(country)
                }
                break
            default:

        }
    }

    return(
        <semisContext.Provider value={{
            setCountrySemis: setCountrySemis,
            semisA: semisA,
            semisB: semisB
        }}>
            {children}
        </semisContext.Provider>
    )
}

export {semisContext, SemisProvider}