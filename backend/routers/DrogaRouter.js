import appExpress from 'express'
import { obtenerDrogas, crearDroga, obtenerDrogaPorId } from '../servicies/DrogaService.js'

const drogaRouter = appExpress.Router()

drogaRouter.get("/", async (req, res) => {
  try {
    let drogas = await obtenerDrogas()
    res.status(200).json(drogas)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

drogaRouter.get("/:id", async (req, res) => {
  try {
    let droga = await obtenerDrogaPorId(req.params.id)
    res.status(200).json(droga)

  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

drogaRouter.post("/", async (req, res) => {
  try {
    let droga = req.body
    let drogaCreada = await crearDroga(droga)
    res.status(201).json(drogaCreada)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default drogaRouter