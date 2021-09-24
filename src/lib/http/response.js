/**
 *
 * @param {any} data
 * @param {string} message
 * @returns {{success: boolean, message: string, data: any}}
 */
export const successResponse = (data, message = "") => {
  return {
    success: true,
    message,
    data,
  };
};

/**
 *
 * @param {string} message
 * @param {any} data
 * @returns {{success: boolean, message: string, data: any}}
 */
export const failedResponse = (message, data = {}) => {
  return {
    success: false,
    message,
    data,
  };
};
