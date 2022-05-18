import React from "react";
import copyIcon from 'img/icons/copy.png'
import { FormattedMessage } from "react-intl";
import toast, { Toaster } from "react-hot-toast";

const Finish = () => {
  const predictionID = localStorage.getItem("idPrediction");

  const userUrl = `https://fixture2022.web.app/${predictionID}`

  const copyTextToClipboard = async () =>{
    //Se verifica que el navegador que se este utilizando soporte clipboard
    if('clipboard' in navigator){
      return await navigator.clipboard.writeText(userUrl)
    }else{
      return document.execCommand('copy', true, userUrl)
    }
  }

  const handleCopy = () =>{
    copyTextToClipboard()
      .then(()=>{
        toast( 
        <FormattedMessage 
          id="finish.alert"
          defaultMessage='URL copied to clipboard!'
        />,
        {
          icon: '📋'
        })
      })
  }

  return (
    <section className="finishContainer">
      <div className="finish">
        <h2 className="title">
          <FormattedMessage 
            id="finish.title" 
            defaultMessage="Congratulations!" 
          />
        </h2>
        <p className="text">
          <FormattedMessage 
            id="finish.text"
            defaultMessage='You have finished your prediction, now share it with your friends: '
          />
        </p>
        <div className="inputContainer">
        <input
          type="text"
          value={userUrl}
          readOnly
        />
        <img src={copyIcon} alt="copiar icono" onClick={() => handleCopy() } />
        </div>
        <button className="btn1" onClick={()=> window.location = '/'}>
          <FormattedMessage id="finish.btn" defaultMessage="Home" />
        </button>
        <Toaster position="bottom-center" toastOptions={
            {
              style: {
                color: '#1E213A',
                fontFamily: 'Raleway',
                fontWeight: '500',
                backgroundColor: '#C7B95A',
                fontSize: '12px'
              }
            }
          } />
      </div>
    </section>
  );
};

export default Finish;
