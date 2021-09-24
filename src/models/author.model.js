import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true,
  },

  profession: {
    type: String,
  },

  nationality: {
    type: String,
  },

  born: {
    type: String,
  },

  died: {
    type: String,
  },

})

const author = mongoose.model('author', authorSchema)

export default author