import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";

/**
 *
 * @returns {AxiosInstance}
 */
const createAxiosInstance = () => {
  const baseUrl =
    process.env.NEX_PUBLIC_MODE === "dev"
      ? process.env.NEXT_PUBLIC_TEST_BASE_URL
      : process.env.NEXT_PUBLIC_PRODUCTION_URL;

  const instance = axios.create({
    baseURL: baseUrl,
  });

  const headers = {
    "Content-Type": "application/json",
  };

  /**
   *
   * @param {AxiosRequestConfig} config
   */
  const axiosRequestInterceptor = (config) => config;

  /**
   *
   * @param {AxiosResponse} resp
   */
  const axiosResponseInterceptor = (resp) => resp;

  for (let [key, value] of Object.entries(headers)) {
    instance.defaults.headers.common[key] = value;
  }

  instance.interceptors.request.use(axiosRequestInterceptor);
  instance.interceptors.response.use(axiosResponseInterceptor);

  return instance;
};

export default createAxiosInstance();
