import getDate from './getDate.model'

export default class quoteAPIEN {
  constructor(data) {
    this.content = data.contentEN
    this.author = {
      name: data.authorEN.name,
      profession: data.authorEN.profession,
      nationality: data.authorEN.nationality,
      born: getDate(data.authorEN.born),
      died: getDate(data.authorEN.died),
    }
    this.tags = data.tagsEN
  }
}