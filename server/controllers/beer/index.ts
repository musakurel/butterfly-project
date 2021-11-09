import express from 'express'
import knex from '../../db'
import { Beer } from './types'

const router: express.Router = new (express.Router as any)()

router.get('/', async (req, res) => {
  const beers = await knex('beer')
    .select<Beer[]>('*')

  res
    .status(200)
    .json(beers)
})

export { router };