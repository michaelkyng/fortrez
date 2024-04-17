import { getBlogs } from "~/server/db/blog";
import { blogTransformer } from "~/server/transformers/blog";

export default defineEventHandler(async () => {
  const blogs = await getBlogs({
    include: {
      author: true,
      mediaFiles: true,
    },

    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return {
    blogs: blogs.map(blogTransformer),
  };
});
