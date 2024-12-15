import Remedio from "../DB/Entities/Remedio.js"
import Tipo from "../DB/Entities/Tipo.js"
import Droga from "../DB/Entities/Droga.js"
import { Op } from "sequelize"

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


export async function getRemedioById(req, res) {
  try {
    const remedio = await Remedio.findByPk(req.params.id, {
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

    if (remedio) {
      return remedio
    } else {
      res.status(404).json({ message: "Remedio no encontrado" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el remedio" })
  }
}

export async function findRemedioByCodigo(req, res) {
  try {
    const remedio = await Remedio.findOne({
      where: {
        Codigo: req.params.codigo,
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

    if (remedio) {
      res.json(remedio)
    } else {
      res.status(404).json({ message: "Remedio no encontrado" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el remedio" })
  }
}

export async function createRemedio(req, res) {
  try {

    const droga = await Droga.findByPk(req.body.Droga)
    const tipo = await Tipo.findByPk(req.body.Tipo)

    if (!droga) {
      return res.status(404).json({ message: "Droga no encontrada" })
    }

    if (!tipo) {
      return res.status(404).json({ message: "Tipo no encontrado" })
    }

    const remedio = await Remedio.create({
      Nombre: req.body.Nombre,
      Medida: req.body.Medida,
      FechaVenciemiento: req.body.FechaVencimiento,
      Cantidad: req.body.Cantidad,
      Codigo: req.body.Codigo,
      Droga: req.body.Droga,
      Tipo: req.body.Tipo,

    })

    res.status(201).json(remedio)
  } catch (error) {
    res.status(500).json({ message: "Error al crear el remedio" })
  }
}