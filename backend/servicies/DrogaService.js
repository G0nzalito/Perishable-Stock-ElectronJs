import Droga from "../DB/Entities/Droga.js"
import { Op } from "sequelize"

export async function obtenerDrogas() {
  return await Droga.findAll()
}

export async function obtenerDrogaPorId(id) {
  return await Droga.findByPk(id)
}

export async function obtenerDrogaPorNombre(nombre) {
  return await Droga.findOne({
    where: {
      Nombre: {
        [Op.eq]: nombre,
      },
    },
  })
}

export async function crearDroga(droga) {
  let drogaExistente = await obtenerDrogaPorNombre(droga.Nombre)
  if (drogaExistente) {
    throw new Error("La droga ya existe")
  }else{
    return await Droga.create(droga)
  }
}