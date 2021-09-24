import getDate from './getDate.model'

export default class quoteAPIAR {
  constructor(data) {
    this.content = data.contentAR
    this.author = {
      name: data.authorAR.name,
      profession: data.authorAR.profession,
      nationality: data.authorAR.nationality,
      born: getDate(data.authorAR.born),
      died: getDate(data.authorAR.died),
    }
    this.tags = data.tagsAR
  }
}