import { failedResponse, successResponse } from "@/lib/http/response";
import { removeFromNewsletter } from "@/server/repositories/newsletter";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function NewsletterApi(req, res) {
  if (req.method === "GET") {
    const { email } = req.query;
    // TODO: add body validation

    await removeFromNewsletter(email);
    return res.json(successResponse({}, "removed from newsletter"));
  } else {
    return res
      .status(400)
      .json(failedResponse(`something went wrong. ${err.toString()}`));
  }
}
