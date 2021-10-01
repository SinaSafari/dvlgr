const { Model } = require("objection");

class Newsletter extends Model {
  static get tableName() {
    return "newsletter";
  }
}

export default Newsletter;
