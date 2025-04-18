require('dotenv').config();
export const getSession =async (req:any,res:any) => {
    console.log("Obtener llave ...")
    const r = await fetch("https://api.openai.com/v1/realtime/sessions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-realtime-preview-2024-12-17",
          voice: "verse",
        }),
      });
      
      
      const data = await r.json();
      console.log("Respuesta :",data);
      res.send(data);    
  }