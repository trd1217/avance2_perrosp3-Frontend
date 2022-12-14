const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string();
const id_usuario = Joi.string().alphanum();
const nombre = Joi.string().min(3).max(50);
const fecha = Joi.string().min(3).max(50);
const detalles = Joi.string().min(3).max(1000);
const numero = Joi.string().alphanum();
const precio = Joi.number().integer().min(10);

const createServicioDto = Joi.object({
  id: id.required(),
  id_usuario: id_usuario.required(),
  nombre: nombre.required(),
  fecha: fecha.required(),
  detalles: detalles.required(),
  numero: numero.required(),
  precio: precio.required(),
});

const updateServicioDto = Joi.object({
  id_usuario: id_usuario,
  nombre: nombre,
  fecha: fecha,
  detalles: detalles,
  numero: numero,
  precio: precio,
});

const getServicioId = Joi.object({
  id: id.required(),
});

module.exports = {
  createServicioDto,
  updateServicioDto,
  getServicioId,
};
