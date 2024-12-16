import appExpress from 'express'
import { getRemedios, createRemedio, getRemedioById } from '../servicies/RemedioService.js'

const remedioRouter = appExpress.Router()

remedioRouter.get("/", async (req, res) => {
  try {
    const remedios = await getRemedios()
    res.status(200).json(remedios)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
)

remedioRouter.get("/:id", async (req, res) => {
  try {
    let remedio = await getRemedioById(req.params.id)
    res.status(200).json(remedio)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
)

remedioRouter.post("/", async (req, res) => {
  try {
    let remedio = req.body
    let remedioCreado = await createRemedio(remedio)
    res.status(201).json(remedioCreado)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
)

export default remedioRouter