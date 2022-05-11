import React, { useState } from "react";
import contenidoEspañol from 'lang/es-AR.json'
import contenidoIngles from 'lang/en-US.json'
import contenidoPortugues from 'lang/pt-BR.json'
import { IntlProvider } from "react-intl";

const langContext = React.createContext()

const LangProvider = ({ children }) => {
    let contenidoDefault
    let lenguajeDefault
    const lang = localStorage.getItem('lang')

    if(lang){
        lenguajeDefault = lang

        if(lang === 'es-AR'){
            contenidoDefault = contenidoEspañol
        } else if(lang === 'en-US'){
            contenidoDefault = contenidoIngles
        } else if(lang === 'pt-BR'){
            contenidoDefault = contenidoPortugues
        }else{
            lenguajeDefault = 'en-US'
            contenidoDefault = contenidoIngles
        }
    }

    const [idiomaContenido, setIdiomaContenido] = useState(contenidoDefault)
    const [lenguaje, setLenguaje] = useState(lenguajeDefault)

    const cambiarIdioma = (lenguaje) => {
        switch (lenguaje) {
            case 'es-AR':
                setIdiomaContenido(contenidoEspañol)
                setLenguaje('es-AR')
                localStorage.setItem('lang', 'es-AR')
                break
            case 'en-US':
                setIdiomaContenido(contenidoIngles)
                setLenguaje('en-US')
                localStorage.setItem('lang', 'en-US')
                break
            case 'pt-BR':
                setIdiomaContenido(contenidoPortugues)
                setLenguaje('pt-BR')
                localStorage.setItem('lang', 'pt-BR')
                break
            default:
                setIdiomaContenido(contenidoIngles)
                setLenguaje('en-US')
                localStorage.setItem('lang', 'en-US')
        }
    }

    return (
        <langContext.Provider value={{
            cambiarIdioma: cambiarIdioma,
            lenguaje: lenguaje
            }}>
            <IntlProvider locale={lenguaje} messages={idiomaContenido}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export { langContext, LangProvider }