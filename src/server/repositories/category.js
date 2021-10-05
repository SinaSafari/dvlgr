import Category from "../models/category";

export const getPopularCategories = async () => {
  return await Category.query().orderBy("posts", "DESC").limit(8);
};
