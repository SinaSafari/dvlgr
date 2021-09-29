const { Model } = require("objection");

class Comment extends Model {
  static get tableName() {
    return "comments";
  }

  $beforeInsert(context) {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get relationMappings() {
    const Post = require("./post");

    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "posts.author_id",
          to: "users.id",
        },
      },
      post: {
        relation: Model.BelongsToOneRelation,
        modelClass: Post,
        join: {
          from: "comments.post_id",
          to: "posts.id",
        },
      },
    };
  }
}

export default Comment;
