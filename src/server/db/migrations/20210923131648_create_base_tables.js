exports.up = (knex) => {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id").primary();
      table.string("fullname").nullable();
      table.string("email");
      table.string("password");
      table
        .enu("role", ["admin", "author", "base_user"])
        .defaultTo("base_user");
      table.timestamps();
    })

    .createTable("categories", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("title");
      table.timestamps();
    })
    .createTable("posts", function (table) {
      table.increments("id").primary();
      table.string("title");
      table.string("slug");
      table.text("content").nullable();
      table.enu("status", ["draft", "published", "to_edit"]).defaultTo("draft");
      table.string("hero_image", 1024);
      table
        .integer("author_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("SET NULL")
        .index();
      table
        .integer("category_id")
        .unsigned()
        .references("id")
        .inTable("categories")
        .onDelete("SET NULL")
        .index();
      table.timestamps();
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTable("users")
    .dropTable("categories")
    .dropTable("posts");
};
