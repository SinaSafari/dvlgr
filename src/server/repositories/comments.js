import Comment from "@/server/models/comment";

export const createComment = async (text, author_id, post_id) => {
  return await Comment.query().insert({
    text: text,
    author_id: author_id,
    post_id: post_id,
  });
};
