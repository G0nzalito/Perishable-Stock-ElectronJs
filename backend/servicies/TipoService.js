import Tipo from "../DB/Entities/Tipo.js"
import { Op } from "sequelize"

export async function obtenerTipos() {
  return await Tipo.findAll()
}

export async function obtenerTipoPorId(id) {
  return await Tipo.findByPk(id)
}

export async function obtenerTipoPorNombre(nombre) {
  return await Tipo.findOne({
    where: {
      Nombre: {
        [Op.eq]: nombre,
      },
    },
  })
}

export async function crearTipo(tipo) {
  let tipoExistente = await obtenerTipoPorNombre(tipo.Nombre)
  if (tipoExistente) {
    throw new Error("El tipo ya existe")
  }else{
    return await Tipo.create(tipo)
  }
}

