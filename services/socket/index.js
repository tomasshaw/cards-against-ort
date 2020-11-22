import io from "socket.io-client";

const SocketURL = "http://127.0.0.1:4001"
const socket = io(SocketURL);

export default socket;