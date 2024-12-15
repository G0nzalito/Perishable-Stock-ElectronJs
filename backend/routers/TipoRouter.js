import appExpress from 'express'
import { obtenerTipos, crearTipo, obtenerTipoPorId } from '../servicies/TipoService.js'

const tipoRouter = appExpress.Router()

tipoRouter.get("/", async (req, res) => {
  try {
    let tipos = await obtenerTipos()
    res.json(tipos).status(200)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
})

tipoRouter.get("/:id", async (req, res) => {
  try {
    let tipo = await obtenerTipoPorId(req.params.id)
    res.json(tipo).status(200)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
})

tipoRouter.post("/", async (req, res) => {
  try {
    let tipo = req.body
    let tipoCreado = await crearTipo(tipo)
    res.json(tipoCreado).status(201)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
})

export default tipoRouter