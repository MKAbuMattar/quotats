import express from 'express'
import router from './router'
import { PORT, DATABASE_URL } from './config/variables.config'
import onYourNetwork from './config/onYourNetwork.config'
import connectDb from './config/db.config'

connectDb(DATABASE_URL)

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  const API_URL = [`/api/v1/`]
  console.clear()

  console.info(`
    Server running at
      Local:            http://localhost:${PORT}/
      On Your Network:  http://${Object.values(onYourNetwork)[0][0]}:${PORT}/
      --------------`)

  for (let i = 0; i < API_URL.length; i++) {
    console.info(`
      Route API Version: ${i + 1}
        All:              http://localhost:${PORT}${API_URL[i]}quote
        Data Random:      http://localhost:${PORT}${API_URL[i]}quote/random
        Raw Data:         http://localhost:${PORT}${API_URL[i]}quote/raw
        Raw Data Random:  http://localhost:${PORT}${API_URL[i]}quote/raw/random
        AR Data:          http://localhost:${PORT}${API_URL[i]}quote/ar
        AR Data Random:   http://localhost:${PORT}${API_URL[i]}quote/ar/random
        EN Data:          http://localhost:${PORT}${API_URL[i]}quote/en
        EN Data Random:   http://localhost:${PORT}${API_URL[i]}quote/en/random
      `)
  }
})