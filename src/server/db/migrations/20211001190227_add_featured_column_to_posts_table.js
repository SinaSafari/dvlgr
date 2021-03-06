exports.up = function (knex) {
  return knex.schema.table("posts", (table) => {
    table.boolean("featured").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.table("posts", (table) => {
    table.dropColumn("featured");
  });
};
