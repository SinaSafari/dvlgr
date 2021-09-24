import { successResponse, failedResponse } from "@/lib/http/response";
import { CheckAuth } from "@/server/middlewares/auth";
import Post from "@/server/models/post";
import { getSinglePost } from "@/server/repositories/posts";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function BlogIndexApi(req, res) {
  if (req.method == "GET") {
    // TODO: add functionality
    const { id } = req.query;
    const post = await getSinglePost(id);

    return res.json(successResponse(post, "list of posts route hitted"));
  } else if (req.method == "PUT" /* && CheckAuth(req) */) {
    // TODO: add functionality
    await Post.query().update({ ...req.body });
    return res.json(
      successResponse({ id: req.query.id }, "update post route hitted")
    );
  } else if (req.method == "PATCH" && CheckAuth(req)) {
    // TODO: add functionality
    return res.json(
      successResponse({ id: req.query.id }, "patch post route hitted")
    );
  } else if (req.method == "DELETE" && CheckAuth(req)) {
    // TODO: add functionality
    return res.json(
      successResponse({ id: req.query.id }, "delete post route hitted")
    );
  } else {
    return res.status(400).json(failedResponse("something went wrong."));
  }
}
