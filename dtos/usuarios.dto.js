const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string();
const isActive = Joi.boolean();
const nombre = Joi.string().min(3).max(50);
const fecha = Joi.string().min(3).max(50);
const correo = Joi.string().min(3).max(50);
const contraseña = Joi.string().min(3).max(50);
//const price = Joi.number().integer().min(10);
const image = Joi.string();

const createUsuarioDto = Joi.object({
  isActive: isActive.required(),
  nombre: nombre.required(),
  fecha: fecha.required(),
  correo: correo.required(),
  contraseña: contraseña.required(),
  image: image.required(),
});

const updateUsuarioDto = Joi.object({
  isActive: isActive,
  nombre: nombre,
  fecha: fecha,
  correo: correo,
  contraseña: contraseña,
  image: image,
});

const getUsuarioId = Joi.object({
  id: id.required(),
});

module.exports = {
  createUsuarioDto,
  updateUsuarioDto,
  getUsuarioId,
};
