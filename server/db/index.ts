import knex from 'knex'

export default knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'user',
    password: '1234',
    database: 'beers'
  },
  debug: false,
  pool: {
    min: 10,
    max: 10000
  }
})