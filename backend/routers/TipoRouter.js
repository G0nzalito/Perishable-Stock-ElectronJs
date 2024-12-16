import appExpress from 'express'
import { obtenerTipos, crearTipo, obtenerTipoPorId } from '../servicies/TipoService.js'

const tipoRouter = appExpress.Router()

tipoRouter.get("/", async (req, res) => {
  try {
    let tipos = await obtenerTipos()
    res.status(200).json(tipos)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

tipoRouter.get("/:id", async (req, res) => {
  try {
    let tipo = await obtenerTipoPorId(req.params.id)
    res.status(200).json(tipo)

  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

tipoRouter.post("/", async (req, res) => {
  try {
    let tipo = req.body
    let tipoCreado = await crearTipo(tipo)
    res.status(201).json(tipoCreado)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default tipoRouter