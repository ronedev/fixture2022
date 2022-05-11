import React from 'react'
import { FormattedMessage } from 'react-intl'
import linkedin from 'img/icons/linkedin.png'
import instagram from 'img/icons/instagram.png'
import twitter from 'img/icons/twitter.png'
import github from 'img/icons/github.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <h4 className='text'>
            <FormattedMessage 
                id='footer.text'
                defaultMessage='Developed whit ❤ by Agustin Vera'
            />
        </h4>
        <div className='redes'>
            <a href="https://www.linkedin.com/in/agustin-vera-4600b4221/">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/ronedev">
                <img src={github} alt="github" />
            </a>
            <a href="https://www.instagram.com/agustin_vera25/">
                <img src={instagram} alt="instagram" />
            </a>
            <a href="https://twitter.com/AgustinAKArone">
                <img src={twitter} alt="twitter" />
            </a>
        </div>
    </footer>
  )
}

export default Footer