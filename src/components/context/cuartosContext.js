import React, { useState } from "react";

const cuartosContext = React.createContext()

const CuartosProvider = ({children}) =>{

    const [equipo1A, setEquipo1A] = useState()
    const [equipo1B, setEquipo1B] = useState()
    const [equipo2A, setEquipo2A] = useState()
    const [equipo2B, setEquipo2B] = useState()
    const [equipo3A, setEquipo3A] = useState()
    const [equipo3B, setEquipo3B] = useState()
    const [equipo4A, setEquipo4A] = useState()
    const [equipo4B, setEquipo4B] = useState()

    let cuartosA = [
        equipo1A,
        equipo2A,
        equipo3A,
        equipo4A
    ]
    let cuartosB = [
        equipo1B,
        equipo2B,
        equipo3B,
        equipo4B
    ]

    const setCountryCuartos = (ronda, country, grupo)=>{

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
            case 4:
                if(grupo === 'A'){
                    setEquipo3A(country)
                }else if(grupo === 'B'){
                    setEquipo3B(country)
                }
                break
            case 5:
                if(grupo === 'A'){
                    setEquipo3A(country)
                }else if(grupo === 'B'){
                    setEquipo3B(country)
                }
                break
            case 6:
                if(grupo === 'A'){
                    setEquipo4A(country)
                }else if(grupo === 'B'){
                    setEquipo4B(country)
                }
                break
            case 7:
                if(grupo === 'A'){
                    setEquipo4A(country)
                }else if(grupo === 'B'){
                    setEquipo4B(country)
                }
                break
            default:

        }
    }

    return(
        <cuartosContext.Provider value={{
            setCountryCuartos: setCountryCuartos,
            cuartosA: cuartosA,
            cuartosB: cuartosB
        }}>
            {children}
        </cuartosContext.Provider>
    )
}

export {cuartosContext, CuartosProvider}