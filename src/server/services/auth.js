import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
/**
 *
 * @param {object} payload
 * @returns {string}
 */
export const createJwtToken = (payload) =>
  jwt.sign({ payload }, "secret", { expiresIn: "7d" });

/**
 *
 * @param {string} psw
 * @param {string} hash
 * @returns
 */
export const pswMatch = async (psw, hash) => compare(psw, hash);

/**
 *
 * @param {string} email
 */
export const getUser = async (email) => {
  // TODO fetch database for data
  return {
    email: "email@test.com",
    password: "$2b$08$8OLlgfefZN5.8FAB6qFgUOiBh6NTAMWZqB4F4mNyff7jYDcHh.G.q", // "123456"
  };
};
