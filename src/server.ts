import app from "./app";
import WebSocket from "ws";

const PORT = process.env.PORT || 3000;

// Interfaz para el mensaje del cliente
interface ClientMessage {
  type: string;
  audioBuffer?: ArrayBuffer; // Buffer de audio enviado por el cliente
}

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Crear el servidor WebSocket
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  console.log('Cliente conectado');

  ws.on('message', (data) => {
    console.log('Mensaje recibido:', data.toString());
    // Aquí puedes reenviar o manejar la conexión a OpenAI Realtime
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});