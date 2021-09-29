import { successResponse, failedResponse } from "@/lib/http/response";
import { setCookie } from "@/lib/http/cookie";
import { loginJoiSchema } from "@/lib/validation/index";
import { getUser, pswMatch, createJwtToken } from "@/server/services/auth";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function AuthApi(req, res) {
  if (req.method == "POST") {
    // validation body
    const { body } = req;
    const { error, value } = loginJoiSchema.validate(JSON.parse(body));

    if (error) {
      return res
        .status(400)
        .json(failedResponse("payload is not valid", error));
    }
    // check if the user exists
    const user = await getUser(value.email);
    if (!user) {
      return res.status(404).json(failedResponse("user not found"));
    }
    // check for password hash
    if (!(await pswMatch(value.password, user.password))) {
      return res.status(400).json(failedResponse("payload is not valid"));
    }
    // create token
    const token = createJwtToken({ email: value.email });
    res = setCookie(res, `Bearer ${token}`);

    return res.status(200).json(successResponse({ token: token }, "logged in"));
  } else {
    return res.status(400).json(failedResponse("something went wrong"));
  }
}
