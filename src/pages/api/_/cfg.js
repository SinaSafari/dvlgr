import { successResponse, failedResponse } from "@/lib/http/response";
import { CheckAuth } from "@/server/middlewares/auth";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default function ConfigurationControllerApi(req, res) {
  if ((req.method == "POST", CheckAuth(req))) {
    // seed database.
  }
}
