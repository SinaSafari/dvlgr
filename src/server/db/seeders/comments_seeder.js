exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        {
          id: 1,
          text: "comment text: 1",
          post_id: 1,
          author_id: 1,
          created_at: new Date().toISOString(),
        },
        {
          id: 2,
          text: "comment text: 2",
          post_id: 1,
          author_id: 2,
          created_at: new Date().toISOString(),
        },
        {
          id: 3,
          text: "comment text: 3",
          post_id: 2,
          author_id: 1,
          created_at: new Date().toISOString(),
        },
      ]);
    });
};
