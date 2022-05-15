import React, { useState } from "react";

const finalContext = React.createContext()

const FinalProvider = ({children})=>{

    const [equipoA, setEquipoA] = useState()
    const [equipoB, setEquipoB] = useState()
    const [terceroA, setTerceroA] = useState()
    const [terceroB, setTerceroB] = useState()

    let tercerPuesto = [
        terceroA,
        terceroB
    ]

    let finalistas = [
        equipoA,
        equipoB
    ]

    const setCountryFinal = (ronda, country, grupo, tercero)=>{
        switch(ronda){
            case 0:
                if(grupo === 'A'){
                    setEquipoA(country)
                    setTerceroA(tercero)
                }else if(grupo === 'B'){
                    setEquipoB(country)
                    setTerceroB(tercero)
                }
                break
            case 1:
                if(grupo === 'A'){
                    setEquipoA(country)
                    setTerceroA(tercero)
                }else if(grupo === 'B'){
                    setEquipoB(country)
                    setTerceroB(tercero)
                }
                break
            default:

        }
    }

    return(
        <finalContext.Provider value={{
            setCountryFinal: setCountryFinal,
            tercerPuesto: tercerPuesto,
            finalistas: finalistas
        }}>
            {children}
        </finalContext.Provider>
    )
}

export {finalContext, FinalProvider}