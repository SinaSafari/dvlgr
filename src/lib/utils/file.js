import { createHash } from "crypto";
import { extname } from "path";
import { rename } from "fs/promises";

export async function generateFileName(fileName) {
  if (typeof fileName !== "string") return null;
  const now = Date.now();
  return createHash("SHA256").update(`${fileName}${now}`).digest("hex");
}

export async function storeFile(file) {
  const filePath = `${process.cwd()}/public/api/posts`;
  const filename = await generateFileName(file.name);
  const newFile = `${filePath}/${filename}${extname(file.name)}`;
  const err = await rename(file.path, newFile);
  if (err) return null;
  return {
    absolutePath: newFile,
    pathInUrl: `/posts/${filename}${extname(file.name)}`,
  };
}
