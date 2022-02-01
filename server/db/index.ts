import knex from 'knex'

export default knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
  },
  debug: false,
  pool: {
    min: 10,
    max: 10000
  }
})