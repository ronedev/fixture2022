import { getGrupoName } from 'components/hooks/getGrupoName'
import React from 'react'
import { gruposPaises } from './listadoPaises'

const Groups = ({countrys}) => {
    return (
        <>
            {
                gruposPaises.map((grupo, idx) => {
                    let grupoName = getGrupoName(idx)
                    return (
                        <div className='grupo'>
                            <h2 className='title'>Grupo {grupoName}</h2>
                            {countrys.map(country=>{
                                if(grupo.includes(country.name.common)){
                                    return(
                                        <button className='country title'>
                                            <img src={country.flags.png} alt="" />
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