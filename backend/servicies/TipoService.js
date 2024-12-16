import Tipo from "../DB/Entities/Tipo.js"
import { Op } from "sequelize"

export async function obtenerTipos() {
  return await Tipo.findAll()
}

export async function obtenerTipoPorId(id) {
  const tipo = await Tipo.findByPk(id)
  if (!tipo) {
    throw new Error("Tipo no encontrado", 404)
  }
  return tipo
}

export async function obtenerTipoPorNombre(nombre) {
  const tipo = await Tipo.findOne({
    where: {
      Nombre: {
        [Op.eq]: nombre,
      },
    },
  })

  if (!tipo) {
    throw new Error("Tipo no encontrado", 404)
  }
  return tipo
}

export async function crearTipo(tipo) {
  try{
    const tipo = await obtenerTipoPorNombre(tipo.Nombre)
    if (tipo) {
      throw new Error("Tipo ya existe", 400)
    }
  }catch{
    return await Tipo.create(tipo)
  }
}

