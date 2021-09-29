import { createComment } from "@/server/repositories/comments";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function CommentsIndexApi(req, res) {
  // create comment
  if (req.method === "POST") {
    // TODO: add auth middleware and get user from req.user
    const { text, post_id, author_id } = req.body;
    // TODO: body validation
    await createComment(text, post_id, author_id);
    return res.status(201).json(successResponse({}, "comment created"));
  } else {
    return res.status(405).json(failedResponse("method not allowed"));
  }
}
