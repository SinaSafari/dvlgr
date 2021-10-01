import Newsletter from "@/server/models/newsletter";

/**
 *
 * @param {string} email
 * @returns
 */
export const addToNewsletter = async (email) => {
  try {
    return await Newsletter.query().insert({
      email: email,
    });
  } catch (err) {
    return err;
  }
};

/**
 *
 * @param {string} email
 * @returns
 */
export const removeFromNewsletter = async (email) => {
  try {
    return await Newsletter.query().where("email", "=", email).delete();
  } catch (err) {
    return err;
  }
};
