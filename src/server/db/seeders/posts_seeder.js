exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          title: "post 1",
          slug: "slug-1",
          content: "content one",
          status: "published",
          hero_image: "test.png",
          author_id: 1,
          category_id: 1,
          created_at: new Date().toISOString(),
        },
        {
          id: 2,
          title: "post 2",
          slug: "slug-2",
          content: "content two",
          status: "published",
          hero_image: "test.png",
          author_id: 1,
          category_id: 2,
          created_at: new Date().toISOString(),
        },
        {
          id: 3,
          title: "post 3",
          slug: "slug-3",
          content: "content three",
          status: "published",
          hero_image: "test.png",
          author_id: 2,
          category_id: 1,
          created_at: new Date().toISOString(),
        },
      ]);
    });
};
