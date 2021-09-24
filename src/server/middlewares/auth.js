import { parseCookie } from "@/lib/http/cookie";
import User, { userRoleType } from "../models/user";
import { verify } from "jsonwebtoken";
import { failedResponse } from "@/lib/http/response";

/**
 *
 * @param {import('next').NextApiRequest} req
 */
export const CheckAuth = async (req, role = userRoleType.BASE_USER) => {
  const { token } = parseCookie(req);
  // const headerToken =
  //   req.headers["authorization"] &&
  //   req.headers["authorization"].startsWith("Bearer") &&
  //   req.headers["authorization"];

  if (token) {
    // TODO handle validation
    const { email } = verify(token, "secret");

    const user = await User.query().where("email", email);

    if (user.role !== role) {
      return false;
    }

    req.user = user;
    return true;
  }
  return false;
};

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @param {string} role
 * @returns
 */
export const CheckAuthAndRole = async (
  req,
  res,
  role = userRoleType.BASE_USER
) => {
  const { token } = parseCookie(req);

  if (!token) {
    return res.status(401).json(failedResponse("invalid credentials", {}));
  }
  // TODO handle validation
  const { email } = verify(token, "secret");

  const user = await User.query().where("email", email);

  if (user.role !== role) {
    return res.status(401).json(failedResponse("expired credentials", {}));
  }

  req.user = user;
  return req;
};
