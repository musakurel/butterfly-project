
exports.up = async function(knex) {
  await knex.raw(`CREATE TYPE beer_type AS ENUM ('stout', 'ipa', 'ale', 'lager')`)

  await knex.raw(`
    CREATE TABLE beer(
      id serial NOT NULL,
      name text UNIQUE NOT NULL,
      manufacturer text NOT NULL,
      type beer_type NOT NULL,
      image_url text NOT NULL,
      description text NOT NULL,
      abv float NOT NULL,
      CONSTRAINT pk_beer PRIMARY KEY (id)
    )
  `)
};

exports.down = async function(knex) {
  await knex.raw(`DELETE TABLE beer`)
};
