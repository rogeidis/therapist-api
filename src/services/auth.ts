require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'mi_clave_secreta';

function generarToken(usuario:any) {
  return jwt.sign({ id: usuario.id, nombre: usuario.nombre }, SECRET, { expiresIn: '1h' });
}

function verificarToken(token:any) {
  try {
    return jwt.verify(token, SECRET);
  } catch (e) {
    return null;
  }
}

module.exports = { generarToken, verificarToken };
