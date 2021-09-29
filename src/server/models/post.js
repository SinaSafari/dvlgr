const { Model } = require("objection");

class Post extends Model {
  static get tableName() {
    return "posts";
  }

  $beforeInsert(context) {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get relationMappings() {
    const User = require("./user").default;
    const Category = require("./category").default;

    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "posts.author_id",
          to: "users.id",
        },
      },
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "posts.category_id",
          to: "category.id",
        },
      },
    };
  }
}

export const postStatusType = Object.freeze({
  DRAFT: "draft",
  PUBLISHED: "published",
  TO_EDIT: "to_edit",
});

export default Post;
