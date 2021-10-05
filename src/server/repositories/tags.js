import Tag from "@/server/models/tag";

export const getFeaturedTags = async () => {
  // most popular tags
  return await Tag.query().orderBy("posts", "DESC").limit(8);
};
