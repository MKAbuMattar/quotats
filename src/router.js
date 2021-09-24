import express from 'express'
import {
  readQuoteRAW,
  readQuote,
  readQuoteAR,
  readQuoteEN,
  readQuoteRandom,
  readQuoteRAWRandom,
  readQuoteARRandom,
  readQuoteENRandom,
} from './controllers/curd.quote.conteraller.v1'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    API: "Work"
  })
})

const API_URL = [`/api/v1/`]

router.get(`${API_URL[0]}quote`, readQuote)
router.get(`${API_URL[0]}quote/random`, readQuoteRandom)
router.get(`${API_URL[0]}quote/raw`, readQuoteRAW)
router.get(`${API_URL[0]}quote/raw/random`, readQuoteRAWRandom)
router.get(`${API_URL[0]}quote/ar`, readQuoteAR)
router.get(`${API_URL[0]}quote/ar/random`, readQuoteARRandom)
router.get(`${API_URL[0]}quote/en`, readQuoteEN)
router.get(`${API_URL[0]}quote/en/random`, readQuoteENRandom)

export default router