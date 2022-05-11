import React from 'react'
import cupImage from 'img/cup.png'
import { FormattedMessage } from 'react-intl'

const Header = () => {
    return (
        <header className='header' id='home'>
            <div className='headerDescription'>
                <h1 className='title'>
                    <FormattedMessage
                        id='header.title'
                        defaultMessage='Start living the world cup from now!'
                    />
                </h1>
                <p className='text'>
                    <span>
                        <FormattedMessage
                            id='header.subtitle'
                            defaultMessage='Make your World Cup prediction and share your result with your friends'
                        />
                    </span>
                    <FormattedMessage
                        id='header.description'
                        defaultMessage='Based on the 32 classified teams, make your predictions for the group stage, round of 16, quarterfinals, semi-final and Final! Share it with your friends and save the link or post so that on December 18 you can compare your results.'
                    />
                </p>
                <button className='btn1' onClick={()=> window.location = '/prediction/group-stage'}>
                    <FormattedMessage
                        id='header.btn'
                        defaultMessage='Start prediction'
                    />
                </button>
            </div>
            <div className='headerImage'>
                <img src={cupImage} alt="world cup" />
            </div>
            <div className='backgroundForm'></div>
        </header>
    )
}

export default Header