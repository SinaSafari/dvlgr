import { Model } from "objection";

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const Post = require("./post");

    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: "users.id",
          to: "posts.author_id",
        },
      },
    };
  }
}

export const userRoleType = Object.freeze({
  ADMIN: "admin",
  AUTHOR: "author",
  BASE_USER: "base_user",
});

export default User;
