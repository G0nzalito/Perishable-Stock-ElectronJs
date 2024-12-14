import cors from 'cors'
import express from 'express'
import dbInit from './DB/dbInit.js'

const app = express()

app.use(cors()).use(express.json())

async function start() {
  const PORT = 4001

  await dbInit()

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

start()

export default app
