import { clasificadosContext } from 'components/context/clasificadosContext'
import { getGrupoName } from 'components/hooks/getGrupoName'
import React, { useContext } from 'react'
import { gruposPaises } from './listadoPaises'

const Groups = ({countrys}) => {

    const {setCountryOctavos, clasificados} = useContext(clasificadosContext)

    return (
        <>
            {
                gruposPaises.map((grupo, idx) => {
                    let grupoName = getGrupoName(idx)
                    return (
                        <div className='grupo'>
                            <h2 className='title'>Grupo {grupoName}</h2>
                            {countrys.map(country=>{
                                const grupoActual = Object.values(clasificados.octavos)[idx]
                                if(grupo.includes(country.name.common)){
                                    let fifaName = country.name.common === 'United Kingdom' ? 'ING' : country.fifa
                                    return(
                                        <button className={
                                            grupoActual.length === 0 ? 'country title' :
                                            grupoActual[0] && grupoActual[0].name === fifaName ? 'country success title' :
                                            grupoActual[1] && grupoActual[1].name === fifaName ? 'country warning title' : 'country error title'
                                        } 
                                            onClick={()=>{ setCountryOctavos(grupoName, {name: fifaName, flag: country.flags.png})}}>
                                            
                                            <img src={country.flags.png} alt="country icon" />
                                            {fifaName}
                                            
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