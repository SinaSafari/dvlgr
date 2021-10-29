/**
 *
 * @param {import('knex')} knex
 */
exports.up = function (knex) {
  return knex.schema.table("users", (t) => {
    t.string("avatar_url").defaultTo("avatar.png");
  });
};

/**
 *
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema.table("users", (t) => {
    t.dropColumn("avatar_url");
  });
};
