// backend/realtime.js
const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function crearSesionRealtime() {
  const session = await openai.beta.chat.realtime.create({
    model: "gpt-4o-realtime-preview-2024-12-17",
    voice: "verse",
  });

  // Puedes ahora usar session.stream.write(audio) en tiempo real
  return session;
}
