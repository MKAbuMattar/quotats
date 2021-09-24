import mongoose from 'mongoose'

const quoteSchema = new mongoose.Schema({

  contentAR: {
    type: String,
    require: true,
  },

  contentEN: {
    type: String,
    require: true,
  },

  sulg: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },

  authorAR: {
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
      type: Date,
    },
    died: {
      type: Date,
    },
  },

  authorEN: {
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
      type: Date,
    },
    died: {
      type: Date,
    },
  },

  tagsAR: [],

  tagsEN: [],

})

const quote = mongoose.model('quote', quoteSchema)

export default quote
