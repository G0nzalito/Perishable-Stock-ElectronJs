import appExpress from 'express'
import { getRemedios, createRemedio, getRemedioById } from '../servicies/RemedioService.js'

const remedioRouter = appExpress.Router()

remedioRouter.get("/", async (req, res) => {
  try {
    const remedios = await getRemedios()
    console.log("remedios")
    res.status(200).json(remedios)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
}
)

remedioRouter.get("/:id", async (req, res) => {
  try {
    let remedio = await getRemedioById(req.params.id)
    res.json(remedio).status(200)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
}
)

remedioRouter.post("/", async (req, res) => {
  try {
    let remedio = req.body
    let remedioCreado = await createRemedio(remedio)
    res.json(remedioCreado).status(201)

  } catch (error) {
    res.json({ error: error.message }).status(500)
  }
}
)

export default remedioRouter