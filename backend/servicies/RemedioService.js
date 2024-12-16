import Remedio from "../DB/Entities/Remedio.js"
import { obtenerDrogaPorId } from "./DrogaService.js"
import { obtenerTipoPorId } from "./TipoService.js"
import Droga from "../DB/Entities/Droga.js"
import Tipo from "../DB/Entities/Tipo.js"
import { Op } from "sequelize"
import RemedioXDroga from "../DB/Entities/RemedioXDroga.js"

export async function getRemedios() {
  return await Remedio.findAll({
    include: [
      {
        model: Tipo,
        attributes: ["Nombre"],
        as: "Tipo",
      },
      {
        model: Droga,
        attributes: ["Nombre"],
        as: "Droga",
      },
    ],
  })
}


export async function getRemedioById(id) {
  return await Remedio.findByPk(id)
}

export async function findRemedioByCodigo(codigo) {
  return await Remedio.findOne({
    where: {
      Codigo: codigo,
    },
    include: [
      {
        model: Tipo,
        attributes: ["Nombre"],
        as: "Tipo",
      },
      {
        model: Droga,
        attributes: ["Nombre"],
        as: "Droga",
      },
    ],
  })
}


export async function createRemedio(data) {
  try {
    const idDrogas = data.Drogas
    for (let i = 0; i < idDrogas.length; i++) {
      const droga = await obtenerDrogaPorId(idDrogas[i])
      if (!droga) {
        return res.status(404).json({ message: "Droga no encontrada" })
      }
    }

    const tipo = await obtenerTipoPorId(data.Tipo)

    if (!tipo) {
      return res.status(404).json({ message: "Tipo no encontrado" })
    }

    const remedio = await Remedio.create({
      Nombre: data.Nombre,
      Medida: data.Medida,
      FechaVencimiento: data.FechaVencimiento,
      Contenido: data.Contenido,
      Codigo: data.Codigo,
      Stock: data.Stock,
      Tipo_id: data.Tipo,
    })

    for (let i = 0; i < idDrogas.length; i++) {
      RemedioXDroga.create({
        idRemedio: remedio.idRemedio,
        idDroga: idDrogas[i],
      })
    }

      return remedio
    } catch (error) {
      throw new Error(error)
    }
  }