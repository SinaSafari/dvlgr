const { Model } = require("objection");

class Post extends Model {
  static get tableName() {
    return "posts";
  }

  $beforeInsert(context) {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }

  $beforeUpdate(opt, queryContext) {
    if (this.content && opt.old.content !== this.content) {
      this.updated_at = new Date().toISOString();
    }
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    json.featured = json.featured == 0 ? false : true;
    return json;
  }

  static get relationMappings() {
    const User = require("./user").default;
    const Category = require("./category").default;
    const Comment = require("./comment").default;
    const Tag = require("./tag").default;

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
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: "posts.id",
          to: "comments.post_id",
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: "posts.id",
          through: {
            from: "post_tags.post_id",
            to: "post_tags.tag_id",
          },
          to: "tags.id",
        },
      },
      likes: {
        relation: Model.HasManyRelation,
        modelClass: require("./like").default,
        filter(builder) {
          builder.where("type", "post");
        },
        beforeInsert(model) {
          model.type = "post";
        },
        join: {
          from: "posts.id",
          to: "likes.likeable_id",
        },
      },
    };
  }
}

/**
 *  movies: {
        relation: Model.ManyToManyRelation,
        modelClass: "Movie",
        join: {
          from: 'persons.id',
          // ManyToMany relation needs the `through` object
          // to describe the join table.
          through: {
            // If you have a model class for the join table
            // you need to specify it like this:
            // modelClass: PersonMovie,
            from: 'persons_movies.personId',
            to: 'persons_movies.movieId'
          },
          to: 'movies.id'
        }
    }
 */

export const postStatusType = Object.freeze({
  DRAFT: "draft",
  PUBLISHED: "published",
  TO_EDIT: "to_edit",
});

export default Post;
