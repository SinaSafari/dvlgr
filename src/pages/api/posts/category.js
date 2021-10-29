import { failedResponse, successResponse } from "@/lib/http/response";
import Category from "@/server/models/category";
import Post from "@/server/models/post";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function categoryapi(req, res) {
  if (req.method === "GET") {
    const category = await Category.query()
      .where("title", req.query.title)
      .first();
    const categories = await Category.query();
    const posts = await Post.query()
      .where("category_id", category.id)
      .withGraphFetched("category")
      .withGraphFetched("author");

    const result = { posts, categories };
    return res.status(200).json(successResponse(result));
  } else {
    return failedResponse("sdf");
  }
}
