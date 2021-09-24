import getDate from './getDate.model'

export default class quoteAPI {
  constructor(data) {
    this.contentAR = data.contentAR
    this.contentEN = data.contentEN
    this.authorAR = {
      name: data.authorAR.name,
      profession: data.authorAR.profession,
      nationality: data.authorAR.nationality,
      born: getDate(data.authorAR.born),
      died: getDate(data.authorAR.died),
    }
    this.authorEN = {
      name: data.authorEN.name,
      profession: data.authorEN.profession,
      nationality: data.authorEN.nationality,
      born: getDate(data.authorEN.born),
      died: getDate(data.authorEN.died),
    }
    this.tagsAR = data.tagsAR
    this.tagsEN = data.tagsEN
  }
}