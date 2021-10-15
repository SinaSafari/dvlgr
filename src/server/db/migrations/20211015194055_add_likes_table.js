/**
 *
 * @param {import('knex')} knex
 */
exports.up = function (knex) {
  return knex.schema.createTable("likes", (table) => {
    table.increments("id").primary();
    table.string("type").defaultTo("post");
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL")
      .index();
    table.integer("likeable_id");
  });
};

/**
 *
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema.dropTable("likes");
};
