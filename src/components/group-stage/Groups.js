import { clasificadosContext } from 'components/context/clasificadosContext'
import { getGrupoName } from 'components/hooks/getGrupoName'
import React, { useContext } from 'react'
import { gruposPaises } from './listadoPaises'

const Groups = ({countrys}) => {

    const {setCountry, clasificados} = useContext(clasificadosContext)

    return (
        <>
            {
                gruposPaises.map((grupo, idx) => {
                    let grupoName = getGrupoName(idx)
                    return (
                        <div className='grupo'>
                            <h2 className='title'>Grupo {grupoName}</h2>
                            {countrys.map(country=>{
                                const grupoActual = clasificados[idx]
                                if(grupo.includes(country.name.common)){
                                    return(
                                        <button className={
                                            grupoActual.length === 0 ? 'country title' :
                                            grupoActual[0] && grupoActual[0].name === country.fifa ? 'country success title' :
                                            grupoActual[1] && grupoActual[1].name === country.fifa ? 'country warning title' : 'country error title'
                                        } 
                                            onClick={()=>{ setCountry(grupoName, {name: country.fifa, flag: country.flags.png})}}>
                                            
                                            <img src={country.flags.png} alt="country icon" />
                                            {country.fifa}
                                            
                                        </button>
                                    )
                                }
                            })}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Groups