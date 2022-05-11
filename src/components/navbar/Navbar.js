import React, { useContext, useState } from 'react'
import menuMobile from 'img/icons/menu.png'
import { FormattedMessage } from 'react-intl'
import { langContext } from 'components/context/langContext'

const Navbar = () => {
    const LangContext = useContext(langContext)

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const [desactiveMobileMenu, setDesactiveMobileMenu] = useState(false)

    return (
        <nav className='nav'>
            <div className='logoNav'>
                <h2>Fixture <span>World Cup 2022</span></h2>
                <ul className='navList'>
                    <li><a href="#home">
                        <FormattedMessage
                            id='nav.home'
                            defaultMessage='Home'
                        />
                    </a></li>
                    <li><a href="#uso">
                        <FormattedMessage
                            id='nav.use'
                            defaultMessage='Use'
                        />
                    </a></li>
                    <li><a href="/prediction">
                        <FormattedMessage
                            id='nav.prediction'
                            defaultMessage='Prediction'
                        />
                    </a></li>
                </ul>
            </div>
            <select name="lang" onChange={(e) => LangContext.cambiarIdioma(e.target.value)} defaultValue={
                LangContext.lenguaje === 'en-US' ? 'en-US' :
                    LangContext.lenguaje === 'es-AR' ? 'es-AR' :
                        LangContext.lenguaje === 'pt-BR' ? 'pt-BR' : 'en-US'
            }>
                <option value="en-US">English</option>
                <option value="es-AR">Spanish</option>
                <option value="pt-BR">Portuguese</option>
            </select>
            {/* boton de mobile menu */}
            <img src={menuMobile} alt="hamburguer menu icon" id='menuMobile' onClick={() => {
                if (mobileMenuVisible) {
                    setMobileMenuVisible(false)
                    setDesactiveMobileMenu(true)
                } else {
                    setMobileMenuVisible(true)
                    setDesactiveMobileMenu(false)
                }
            }} />

            <div className={mobileMenuVisible ? 'mobileMenu active' : desactiveMobileMenu ? 'mobileMenu desactive' : 'mobileMenu'}>
                <ul className='navList'>
                    <li><a href="#home">
                        <FormattedMessage
                            id='nav.home'
                            defaultMessage='Home'
                        />
                    </a></li>
                    <li><a href="#uso">
                        <FormattedMessage
                            id='nav.use'
                            defaultMessage='Use'
                        />
                    </a></li>
                    <li><a href="/prediction">
                        <FormattedMessage
                            id='nav.prediction'
                            defaultMessage='Prediction'
                        />
                    </a></li>
                </ul>
                <select name="lang" onChange={(e) => LangContext.cambiarIdioma(e.target.value)} defaultValue={
                    LangContext.lenguaje === 'en-US' ? 'en-US' :
                        LangContext.lenguaje === 'es-AR' ? 'es-AR' :
                            LangContext.lenguaje === 'pt-BR' ? 'pt-BR' : 'en-US'
                }>
                    <option value="en-US">English</option>
                    <option value="es-AR">Spanish</option>
                    <option value="pt-BR">Portuguese</option>
                </select>
            </div>
        </nav>
    )
}

export default Navbar