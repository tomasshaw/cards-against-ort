import React from 'react'
import GlobalContext from '../../global/context/index'

const GlobalProvider = () =>{
	useEffect(() =>{
        //seteo data de socket
        //puede estar en App tambien
        //Tiene que estar en un componente superior
    }, [])
    
    return(
        <GlobalContext.Provider value={{
            //aca todos los datos
        }}>
           { /* Aca puedo inyectar cualquier arbol de componentes que quiero que tenga acceso a esta data*/}
        </GlobalContext.Provider>     
    )
}

export default GlobalProvider
