import { failedResponse, successResponse } from "@/lib/http/response";
import Category from "@/server/models/category";
import Tag from "@/server/models/tag";
import { createPost } from "@/server/repositories/posts";
import formidable from "formidable";
import { storeFile } from "@/lib/utils/file";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @returns
 */
export default async function CreatePostApi(req, res) {
  switch (req.method) {
    case "GET":
      return pageDataController(req, res);
    case "POST":
      console.log("sdfjksdf");
      return await createPostController(req, res);
    default:
      return res.status(405).json(failedResponse("method not allowed", {}));
  }
}

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @returns
 */
async function createPostController(req, res) {
  try {
    const { err, fields, files } = await new Promise((resolve, reject) => {
      const form = new formidable();
      console.log("Im here");

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

    let imagefilepath = "";
    if (files.hero_image) {
      imagefilepath = await storeFile(files.hero_image);
    }
    await createPost(fields, imagefilepath.pathInUrl);

    return res
      .status(201)
      .json(successResponse({}, "create post route hitted"));
  } catch (err) {
    return res
      .status(500)
      .json(failedResponse("somethign went wrong: " + err.toString()));
  }
}

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @returns
 */
async function pageDataController(req, res) {
  try {
    const tags = await Tag.query();
    const categories = await Category.query();

    return res
      .status(200)
      .json(successResponse({ tags, categories }, "page initial data"));
  } catch (err) {
    return res
      .status(500)
      .json(failedResponse("somethign went wrong: " + err.toString()));
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
