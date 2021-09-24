import cookie from "cookie";

/**
 *
 * @param {import('next').NextApiResponse} res
 * @param {string} data
 * @returns {import('next').NextApiResponse}
 */
export const setCookie = (res, data) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", data, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: "strict",
      path: "/",
    })
  );
  return res;
};

/**
 *
 * @param {import('next').NextApiRequest} req
 * @return {{string: string}}
 */
export const parseCookie = (req) => {
  return cookie.parse(req ? req.headers.cookie || "" : "");
};
