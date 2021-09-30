export const HomePageSSR = async () => {
  // todo: add data fetching functionality here
};

export const PostListSSR = async () => {
  // todo: add data fetching functionlity here
  // this function should get category name or id as paramenter
};

export const PostSingleSSR = async () => {
  // todo: add data fetching functionlity here
  // this function should get post slug or id as paramenter
};

export const AuthorSSR = async () => {
  // todo: add data fetching functionlity here
  // this function should get author email or id as paramenter
};

/**
 * mapper function that maps different datafetching methods with
 * corresponsing keys which is accessible through whole application
 *
 * @returns {Object}
 */
export const ServiceContainer = () => {
  return {
    HomePageSSR: HomePageSSR,
    PostListSSR: PostListSSR,
    PostSingleSSR: PostSingleSSR,
    AuthorSSR: AuthorSSR,
  };
};
