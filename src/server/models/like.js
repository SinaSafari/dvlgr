const { Model } = require("objection");

class Like extends Model {
  static get tableName() {
    return "likes";
  }

  static get relationMappings() {
    const Post = require("./post");
    const Comment = require("./comment");

    return {
      post: {
        relation: Model.BelongsToOneRelation,
        modelClass: Post,
        filter(builder) {
          builder.where("type", "post");
        },
        join: {
          from: "likes.likeable_id",
          to: "posts.id",
        },
      },
      comment: {
        relation: Model.BelongsToOneRelation,
        modelClass: Comment,
        filter(builder) {
          builder.where("type", "comment");
        },
        join: {
          from: "likes.likeable_id",
          to: "comments.id",
        },
      },
    };
  }
}

export default Like;
