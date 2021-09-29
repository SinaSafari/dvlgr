const { Model } = require("objection");

class Tag extends Model {
  static get tableName() {
    return "tags";
  }
  static get relationMappings() {
    const Post = require("./post").default;
    return {
      posts: {
        relation: Model.ManyToManyRelation,
        modelClass: Post,
        join: {
          from: "tags.id",
          through: {
            from: "post_tags.tag_id",
            to: "post_tags.post_id",
          },
          to: "posts.id",
        },
      },
    };
  }
}

export default Tag;
