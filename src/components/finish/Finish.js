import React from 'react'

const Finish = () => {

    const predictionID = localStorage.getItem('idPrediction')

  return (
    <section className='finishContainer'>
        <div className='finish'>
            <h2 className='title'>¡Felicitaciones!</h2>
            <p className='text'>Has finalizado tu predicción, ahora compartila con tus amigos</p>
            <input type="text" value={`http://localhost:3000/${predictionID}`} />
        </div>
    </section>
  )
}

export default Finish