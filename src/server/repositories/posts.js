import Post from "@/server/models/post";

/**
 * get paginated posts by author or category.
 *
 * @todo add category functionality as well
 *
 * @param {number} page
 * @param {string} type
 * @param {number|string} typeId
 * @returns
 */
export const getAllPosts = async (page = 1, type = "", typeId = "") => {
    const perPage = 8;
    const offsetValue = (page - 1) * perPage;

    return await Post.query()
        .withGraphFetched("author")
        .withGraphFetched("comments")
        .withGraphFetched("tags")
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
    return await Post.query()
        .findById(id)
        .withGraphFetched("author")
        .withGraphFetched("comments");
};

export const getPostsByCategoryId = async (categoryId) => {
    return await Post.query()
        .where("category_id", categoryId)
        .orderBy("created_at");
};

export const getPostsByAuthorId = async (authorId) => {
    return await Post.query().where("author_id", authorId).orderBy("created_at");
};

export const incrementPostView = async (id) => {
    await Post.query().where("id", "=", id).increment("view_count", 1);
};

export const createPost = async (postData, imagefilepath = "") => {
    let data = {
        title: postData.title,
        slug: postData.slug,
        content: postData.content || "",
        status: postData.status || "draft",
        hero_image: imagefilepath,
        author_id: 1,
        category_id: postData.category,
    };

    if (postData.tags) {
        const tagsList = JSON.parse(postData.tags);
        let tagsArr = [];
        tagsList.forEach((i) => {
            let temp = {};
            temp.id = i;
            tagsArr.push(temp);
        });
        data = {
            ...data,
            tags: tagsArr,
        };
    }

    console.log(data);

    await Post.query().insertGraph(data, {relate: true});
};

export const latestPosts = async () => {
    return await Post.query().orderBy("created_at", "DESC").limit(4);
};

export const getFeaturedPosts = async () => {
    return await Post.query()
        .where("featured", "=", true)
        .orderBy("created_at", "DESC")
        .limit(4);
};
