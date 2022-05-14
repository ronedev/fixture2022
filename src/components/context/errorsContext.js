import React, { useState } from "react";

const errorsContext = React.createContext()

const ErrorsProvider = ({children})=>{

    const [errores, setErrores] = useState([
        'Debe ingresar el primero y el segundo de cada grupo'
    ])

    const addError = (err)=>{
        setErrores(err)
        return false
    }

    return(
        <errorsContext.Provider value={{
            addError: addError,
            errores: errores
        }}>
            {children}
        </errorsContext.Provider>
    )
}

export {errorsContext, ErrorsProvider}