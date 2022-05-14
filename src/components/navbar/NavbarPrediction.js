import React, { useContext } from 'react'
import volverIcon from 'img/icons/volver.png'
import { langContext } from 'components/context/langContext'

const NavbarPrediction = () => {

    const LangContext = useContext(langContext)

    return (
        <nav className='navPrediction'>
            <img src={volverIcon} alt="volver icon" onClick={() => window.location = '/'} />
            <select name="lang" onChange={(e) => LangContext.cambiarIdioma(e.target.value)} defaultValue={
                LangContext.lenguaje === 'en-US' ? 'en-US' :
                    LangContext.lenguaje === 'es-AR' ? 'es-AR' :
                        LangContext.lenguaje === 'pt-BR' ? 'pt-BR' : 'en-US'
            }>
                <option value="en-US">English</option>
                <option value="es-AR">Spanish</option>
                <option value="pt-BR">Portuguese</option>
            </select>
        </nav>
    )
}

export default NavbarPrediction