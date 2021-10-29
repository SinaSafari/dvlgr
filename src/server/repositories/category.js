import Category from "../models/category";

export const getPopularCategories = async () => {
  // TODO: add query for most popular posts
  return await Category.query();
};
