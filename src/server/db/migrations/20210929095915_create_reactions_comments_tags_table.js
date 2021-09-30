exports.up = function (knex) {
  return knex.schema
    .table("posts", (table) => {
      table.integer("view_count").unsigned().defaultTo(0);
    })
    .createTable("tags", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.integer("posts").comment("how many posts have this tag attached.");
    })
    .createTable("post_tags", (table) => {
      table.increments("id").primary();
      table
        .integer("post_id")
        .unsigned()
        .references("id")
        .inTable("posts")
        .onDelete("SET NULL")
        .index();
      table
        .integer("tag_id")
        .unsigned()
        .references("id")
        .inTable("tags")
        .onDelete("SET NULL")
        .index();
    })
    .createTable("reactions", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.string("reaction_unicode");
    })
    .createTable("post_reactions", (table) => {
      table.increments("id").primary();
      table
        .integer("post_id")
        .unsigned()
        .references("id")
        .inTable("posts")
        .onDelete("SET NULL")
        .index();
      table
        .integer("reaction_id")
        .unsigned()
        .references("id")
        .inTable("reactions")
        .onDelete("SET NULL")
        .index();

      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("SET NULL")
        .index();
    })
    .createTable("comments", (table) => {
      table.increments("id").primary();
      table.string("text");

      table
        .integer("post_id")
        .unsigned()
        .references("id")
        .inTable("posts")
        .onDelete("SET NULL")
        .index();
      table
        .integer("author_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("SET NULL")
        .index();
      table.timestamps();
    });
};

exports.down = function (knex) {
  return knex.schema
    .table("posts", (table) => {
      table.dropColumn("");
    })
    .dropTable("tags")
    .dropTable("post_tags")
    .dropTable("reactions")
    .dropTable("post_reactions")
    .dropTable("comments");
};
