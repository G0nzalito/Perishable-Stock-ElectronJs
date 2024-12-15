import cors from 'cors'
import express from 'express'
import dbInit from './DB/dbInit.js'
import drogaRouter from './routers/DrogaRouter.js' 
import tipoRouter from './routers/TipoRouter.js'
import remedioRouter from './routers/RemedioRouter.js'

const app = express()

app.use(cors()).use(express.json())

app.use("/api/drogas", drogaRouter)
app.use("/api/tipos", tipoRouter)
app.use("/api/remedios", remedioRouter)

async function start() {
  const PORT = 4001

  await dbInit()

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

start()

export default app
