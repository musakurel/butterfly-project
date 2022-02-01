/* 
exports.up = async function(knex) {
  await knex.raw(`
    CREATE TABLE butterfly(
      id serial NOT NULL,
      name text UNIQUE NOT NULL,
      species text NOT NULL,
      link text NOT NULL,
      image_url text NOT NULL,
      CONSTRAINT pk_beer PRIMARY KEY (id)
    )
  `)
}

exports.down = async function(knex) {
  await knex.raw(`DELETE TABLE butterfly`)
}
 */

exports.up = function (knex, Promise) {
  return knex.schema.createTable("butterfly", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.string("species");
    table.string("link");
    table.string("image_url");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("butterfly");
};
