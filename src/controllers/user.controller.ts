import { Request, Response } from 'express';
import { User } from '../models/user.model';

export const crearUsuario = async (req: Request, res: Response) => {
  try {
    const nuevoUsuario = new User(req.body);
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario', detalle: error });
  }
};

export const obtenerUsuarios = async (_req: Request, res: Response) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios', detalle: error });
  }
};
