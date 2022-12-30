import { io } from "socket.io-client";

class SocketIOService {
  socket;
  constructor() {
    this.socket = io("http://localhost:3000", {
      withCredentials: true,
      extraHeaders: {
        "CAPP_ID_STRING": import.meta.env.VITE_APP_IDSTRING,
      },
      transports : ['websocket'],
    }) ;
  }
}

const ClientSocket = new SocketIOService().socket;
// create an instance/connection here
export default ClientSocket;