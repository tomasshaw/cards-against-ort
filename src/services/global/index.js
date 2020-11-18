import React from 'react'
import GlobalContext from '../../global/context/index'

import io from 'socket.io-client'
const ENDPOINT = "http://127.0.0.1:4001";
const socket = io(ENDPOINT);  

const GlobalProvider = () =>{
	useEffect(() =>{
        socket.connect()
    }, [])
    
    return(
        <GlobalContext.Provider value={{
            socket: socket
        }}>
           <Home />
           <Lobby />
           <Game />
           <About />
        </GlobalContext.Provider>     
    )
}

export default GlobalProvider
