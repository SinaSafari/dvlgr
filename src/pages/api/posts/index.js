import { successResponse, failedResponse } from "@/lib/http/response";
import { CheckAuth } from "@/server/middlewares/auth";
import { getAllPosts, createPost } from "@/server/repositories/posts";
import formidable from "formidable";
import { storeFile } from "@/lib/utils/file";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function BlogDetailApi(req, res) {
  if (req.method == "GET") {
    try {
      const page = req.query.page || 1;
      const type = req.query.by || "";
      const typeId = req.query.byId || "";
      // TODO: add functionality for pagination, filtering and sorting.
      const posts = await getAllPosts(page, type, typeId);
      return res.json(successResponse(posts, "list of posts route hitted"));
    } catch (err) {
      return res
        .status(400)
        .json(failedResponse(`something went wrong. ${err.toString()}`));
    }
  } else if (req.method == "POST" && CheckAuth(req)) {
    // TODO: add functionality
    const { err, fields, files } = await new Promise((resolve, reject) => {
      const form = new formidable();
      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });

    if (err) {
      return res
        .status(400)
        .json(failedResponse(`something went worng: ${err.toString}`));
    }

    // let imagefilepath = files.hero_image ? await storeFile(files.hero_image) : ""

    let imagefilepath = "";
    if (files.hero_image) {
      imagefilepath = await storeFile(files.hero_image);
    }
    await createPost(fields, imagefilepath.pathInUrl);

    return res
      .status(201)
      .json(successResponse({}, "create post route hitted"));
  } else {
    return res.status(405).json(failedResponse("method not allowed"));
  }
}

/**
 * for formidble works, FormData shouldn't be parsed by bodyParser
 */
export const config = {
  api: {
    bodyParser: false,
  },
};
