class Restaurant {
  image: string
  title: string
  rate: number
  description: string
  tags: string[]
  id: number
  items: object[]

  constructor(
    image: string,
    title: string,
    rate: number,
    description: string,
    tags: string[],
    id: number,
    items: object[]
  ) {
    this.image = image
    this.title = title
    this.rate = rate
    this.description = description
    this.tags = tags
    this.id = id
    this.items = items
  }
}

export default Restaurant