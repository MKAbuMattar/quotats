import quoteModle from '../models/quote.model'
import quoteAPIModle from '../models/quoteAPI.model'
import quoteAPIARModle from '../models/quoteAPIAR.model'
import quoteAPIENModle from '../models/quoteAPIEN.model'

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const readQuoteRAW = async (req, res) => {

  quoteModle.find({}, (err, data) => {

    if (err) {
      res.status(401).json({
        errors: err
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: data
      })
    }
  })
}

export const readQuoteRAWRandom = async (req, res) => {

  quoteModle.find({}, (err, data) => {

    if (err) {
      res.status(401).json({
        errors: err
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: data[getRndInteger(0, data.length - 1)]
      })
    }
  })
}

export const readQuote = async (req, res) => {

  const formatData = []

  quoteModle.find({}, (err, data) => {

    data.sort((a, b) => {
      return a.authorAR.name.localeCompare(b.authorAR.name)
    })

    data.forEach((result, idx) => {
      formatData.push((new quoteAPIModle(result, idx)))
    })

    if (err) {
      res.status(401).json({
        errors: err
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: formatData
      })
    }
  })
}

export const readQuoteRandom = async (req, res) => {

  const formatData = []

  quoteModle.find({}, (err, data) => {

    data.sort((a, b) => {
      return a.authorAR.name.localeCompare(b.authorAR.name)
    })

    data.forEach((result, idx) => {
      formatData.push((new quoteAPIModle(result, idx)))
    })

    if (err) {
      res.status(401).json({
        errors: err
      })
    } else {

      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: formatData[getRndInteger(0, formatData.length - 1)]
      })
    }
  })
}

export const readQuoteAR = async (req, res) => {

  const formatData = []

  quoteModle.find({}, (err, data) => {

    data.sort((a, b) => {
      return a.authorAR.name.localeCompare(b.authorAR.name)
    })

    data.forEach((result, idx) => {
      formatData.push((new quoteAPIARModle(result, idx)))
    })

    if (err) {
      res.status(401).json({
        errors: err
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: formatData
      })
    }
  })
}

export const readQuoteARRandom = async (req, res) => {

  const formatData = []

  quoteModle.find({}, (err, data) => {

    data.sort((a, b) => {
      return a.authorAR.name.localeCompare(b.authorAR.name)
    })

    data.forEach((result, idx) => {
      formatData.push((new quoteAPIARModle(result, idx)))
    })

    if (err) {
      res.status(401).json({
        errors: err
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: formatData[getRndInteger(0, formatData.length - 1)]
      })
    }
  })
}

export const readQuoteEN = async (req, res) => {

  const formatData = []

  quoteModle.find({}, (err, data) => {

    data.sort((a, b) => {
      return a.authorAR.name.localeCompare(b.authorAR.name)
    })

    data.forEach((result, idx) => {
      formatData.push((new quoteAPIENModle(result, idx)))
    })

    if (err) {
      res.status(401).json({
        errors: err
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: formatData
      })
    }
  })
}

export const readQuoteENRandom = async (req, res) => {

  const formatData = []

  quoteModle.find({}, (err, data) => {

    data.sort((a, b) => {
      return a.authorAR.name.localeCompare(b.authorAR.name)
    })

    data.forEach((result, idx) => {
      formatData.push((new quoteAPIENModle(result, idx)))
    })

    if (err) {
      res.status(401).json({
        errors: err
      })
    } else {
      res.status(200).json({
        success: true,
        totalCount: data.length,
        data: formatData[getRndInteger(0, formatData.length - 1)]
      })
    }
  })
}