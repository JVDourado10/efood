class Restaurant {
  image: string
  title: string
  rate: number
  description: string
  tags: string[]
  id: number

  constructor(
    image: string,
    title: string,
    rate: number,
    description: string,
    tags: string[],
    id: number
  ) {
    this.image = image
    this.title = title
    this.rate = rate
    this.description = description
    this.tags = tags
    this.id = id
  }
}

export default Restaurant