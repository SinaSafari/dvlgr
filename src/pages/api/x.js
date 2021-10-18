import { failedResponse, successResponse } from "@/lib/http/response";
import Post from "@/server/models/post";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function HomePageApi(req, res) {
  if (req.method === "GET") {
    const posts = await Post.query().withGraphFetched("likes");
    return res.json({ posts });
  } else {
    return res.status(405).json(failedResponse("mehtod not allowed"));
  }
}
