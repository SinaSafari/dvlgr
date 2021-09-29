exports.seed = function (knex) {
  // Deletes ALL existing entries
  knex("reactions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("reactions").insert([
        { id: 1, title: "love", reaction_unicode: "U+2764" },
        { id: 2, title: "like", reaction_unicode: "U+1F44D" },
        { id: 3, title: "clap", reaction_unicode: "U+1F44F" },
      ]);
    });

  knex("post_reactions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("post_reactions").insert([
        { id: 1, post_id: 1, reaction_id: 1, user_id: 1 },
        { id: 2, post_id: 1, reaction_id: 2, user_id: 2 },
        { id: 3, post_id: 2, reaction_id: 2, user_id: 2 },
      ]);
    });
};
