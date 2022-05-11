import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import futbolPelota from 'img/futbol.png'

const Countdown = () => {
    
    //Estado para manejar el contador
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0
    })

    //Funcion para obtener el tiempo restante a Qatar
    const getTime = ()=>{
        const qatarDate = new Date(2022, 11, 21)
        const dateActual = new Date()
        let days = 0

        for(let i = dateActual.getMonth()+1; i < qatarDate.getMonth()+1; i++){
            
            const totalDaysMonth = new Date(2022, i, 0).getDate()
            
            if(i === (dateActual.getMonth() + 1) ){
                days = days + (totalDaysMonth - dateActual.getDate())
            }else if (i === qatarDate.getMonth()){
                if(qatarDate.getMonth() === dateActual.getMonth()){
                    days = days + (qatarDate.getDate() - dateActual.getDate())
                }else{
                    days = days + qatarDate.getDate()
                }
            }else{
                days = days + totalDaysMonth
            }
        }
        const horasRestantes = 24 - dateActual.getHours()
        const minutosRestantes = 60 - dateActual.getMinutes()
        setTime({days: days, hours: horasRestantes, minutes: minutosRestantes})
    }

    useEffect(()=>{
        getTime()
        setInterval(()=>{
            getTime()
        }, 60000)
    },[])

  return (
    <section className='countdownContainer'>
        <h2 className='title'>
            <FormattedMessage 
                id='countdown.title'
                defaultMessage='How long to Qatar?'
            />
        </h2>
        <div className='countdown'>
            <p><span>{time.days} <br /></span>
                <FormattedMessage
                    id='countdown.days'
                    defaultMessage='Days'
                />
            </p>
            <img src={futbolPelota} alt="futbol balon" />
            <p><span>{time.hours} <br /></span>
                <FormattedMessage 
                    id='countdown.hours'
                    defaultMessage='Hours'
                />
            </p>
            <img src={futbolPelota} alt="futbol balon" />
            <p><span>{time.minutes} <br /></span>
                <FormattedMessage 
                    id='countdown.minutes'
                    defaultMessage='Minutes'
                />
            </p>
        </div>
    </section>
  )
}

export default Countdown