import { Model } from "objection";

class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get relationMappings() {
    const Post = require("./post");

    return {
      relation: Model.HasManyRelation,
      modelClass: Post,
      join: {
        from: "categories.id",
        to: "posts.category_id",
      },
    };
  }
}

export default Category;
