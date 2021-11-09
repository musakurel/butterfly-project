export type BeerType = 'stout' | 'ipa' | 'ale' | 'lager'

export type Beer = {
  id: number,
  name: string,
  manufacturer: string,
  type: BeerType,
  image_url: string,
  description: string,
  abv: number
}