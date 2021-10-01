import { failedResponse, successResponse } from "@/lib/http/response";
import { addToNewsletter } from "@/server/repositories/newsletter";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function NewsletterApi(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    // TODO: add body validation

    await addToNewsletter(email);
    return res.json(successResponse({}, "added to newsletter"));
  } else {
    return res
      .status(400)
      .json(failedResponse(`something went wrong. ${err.toString()}`));
  }
}
