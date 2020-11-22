import {createContext} from 'react'

const SocketContext = createContext({
    socket: '',
    roomId: '',
})

export default SocketContext;

