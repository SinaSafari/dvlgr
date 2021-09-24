import Post from "@/server/models/post";

export const getAllPosts = async (page = 1, type = "", typeId = "") => {
  const perPage = 8;
  const offsetValue = (page - 1) * perPage;

  return await Post.query()
    .modify((query) => {
      if (type && typeId && type === "category") {
        query.where("category_id", typeId);
      } else if (type && typeId && type === "author") {
        query.where("author_id", typeId);
      }
    })
    .offset(offsetValue)
    .limit(perPage);
};

export const getSinglePost = async (id) => {
  return await Post.query().findById(id);
};

export const getPostsByCategoryId = async (categoryId) => {
  return await Post.query()
    .where("category_id", categoryId)
    .orderBy("created_at");
};

export const getPostsByAuthorId = async (authorId) => {
  return await Post.query().where("author_id", authorId).orderBy("created_at");
};

export const createPost = async (postData, imagefilepath = "") => {
  // console.log("in service: ", imagefilepath ? imagefilepath : "");
  await Post.query().insert({
    title: postData.title,
    slug: postData.slug,
    content: postData.content || "",
    status: "draft",
    hero_image: imagefilepath,
    author_id: 1,
    category_id: postData.category_id,
  });
};
