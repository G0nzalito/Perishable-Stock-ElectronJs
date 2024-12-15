import appExpress from 'express'
import { obtenerDrogas, crearDroga, obtenerDrogaPorId } from '../servicies/DrogaService.js'

const drogaRouter = appExpress.Router()

drogaRouter.get("/", async (req, res) => {
  try {
    let drogas = await obtenerDrogas()
    res.json(drogas).status(200)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
})

drogaRouter.get("/:id", async (req, res) => {
  try {
    let droga = await obtenerDrogaPorId(req.params.id)
    res.json(droga).status(200)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
})

drogaRouter.post("/", async (req, res) => {
  try {
    let droga = req.body
    let drogaCreada = await crearDroga(droga)
    res.json(drogaCreada).status(201)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
})

export default drogaRouter