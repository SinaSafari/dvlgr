exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          fullname: "sina",
          email: "m.sinasafari@gmail.com",
          password:
            "$2b$08$8OLlgfefZN5.8FAB6qFgUOiBh6NTAMWZqB4F4mNyff7jYDcHh.G.q",
          role: "admin",
        },
        {
          id: 2,
          fullname: "test",
          email: "test@gmail.com",
          password:
            "$2b$08$8OLlgfefZN5.8FAB6qFgUOiBh6NTAMWZqB4F4mNyff7jYDcHh.G.q",
          role: "admin",
        },
      ]);
    });
};
