exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          fullname: "sinasafari",
          email: "m.sinasafari@gmail.com",
          avatar_url: "/img/avatar/sina.jpg",
          password:
            "$2b$08$8OLlgfefZN5.8FAB6qFgUOiBh6NTAMWZqB4F4mNyff7jYDcHh.G.q",
          role: "admin",
        },
        {
          id: 2,
          fullname: "mohammad Roudkhanehie",
          email: "mohamadali.r7@gmail.com",
          avatar_url: "/img/avatar/mohammad.jpg",
          password:
            "$2b$08$8OLlgfefZN5.8FAB6qFgUOiBh6NTAMWZqB4F4mNyff7jYDcHh.G.q",
          role: "admin",
        },
      ]);
    });
};
