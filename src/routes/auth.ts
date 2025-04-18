import { Router } from "express";
const router = Router();

router.post("/login", (req:any, res:any) => {
  const { nombre, clave } = req.body;
  if (nombre && clave) {
    // Simulamos login
    const token = generarToken({ id: 1, nombre });
    return res.json({ token });
  }
  res.status(401).json({ error: "Credenciales inválidas" });
});

export default router;
