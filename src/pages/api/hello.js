import { failedResponse, successResponse } from "@/lib/http/response";
import { getPopularCategories } from "@/server/repositories/category";
import { getFeaturedPosts, latestPosts } from "@/server/repositories/posts";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function HomePageApi(req, res) {
  if (req.method === "GET") {
    const resposnse = {
      topCategories: await getPopularCategories(),
      featuredPosts: await getFeaturedPosts(),
      latestPosts: await latestPosts(),
    };

    return res
      .status(200)
      .json(successResponse(resposnse, "home page bootstrap"));
  } else {
    return res.status(405).json(failedResponse("mehtod not allowed"));
  }
}
