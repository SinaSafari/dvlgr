exports.seed = function (knex) {
  // Deletes ALL existing entries
  knex("tags")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tags").insert([
        { id: 1, title: "Js", posts: 1 },
        { id: 2, title: "Python", posts: 1 },
        { id: 3, title: "Swift", posts: 1 },
      ]);
    });

  knex("post_tags")
    .del()
    .then(() => {
      return knex("post_tags").insert([
        { id: 1, post_id: 1, tag_id: 1 },
        { id: 2, post_id: 1, tag_id: 2 },
        { id: 3, post_id: 2, tag_id: 1 },
      ]);
    });
};
