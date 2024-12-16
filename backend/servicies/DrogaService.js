import Droga from "../DB/Entities/Droga.js"
import { Op } from "sequelize"

export async function obtenerDrogas() {
  return await Droga.findAll()
}

export async function obtenerDrogaPorId(id) {
  const droga = await Droga.findByPk(id)
  if (!droga) {
    throw new Error("Droga no encontrada", 404)
  }
  return droga
}

export async function obtenerDrogaPorNombre(nombre) {
  const droga = Droga.findOne({
    where: {
      Nombre: {
        [Op.eq]: nombre,
      },
    },
  })
  if (!droga) {
    throw new Error("Droga no encontrada", 404)
  }
  return droga
}

export async function obtenerDrogaPorNombreYMedida(nombre, medida) {
  const droga = Droga.findOne({
    where: {
      Nombre: {
        [Op.eq]: nombre,
      },
      Medida: {
        [Op.eq]: medida,
      },
    },
  })
  if (!droga) {
    throw new Error("Droga no encontrada", 404)
  }
  return droga
  
}

export async function crearDroga(droga) {
  try{
    const droga = await obtenerDrogaPorNombre(droga.Nombre)
    if (droga) {
      throw new Error("Droga ya existe", 400)
    }
  }catch{
    return await Droga.create(droga)
  }
}