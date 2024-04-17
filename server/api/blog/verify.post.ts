import { verifyBlog } from "~/server/db/blog";
import { blogTransformer } from "~/server/transformers/blog";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { title } = body;
  const blog = await verifyBlog({
    where: {}, // Add any additional where conditions if needed
    include: {
      mediaFiles: true,
    },
    title, // Pass the title as part of the params object
  });
  return {
    blog: blogTransformer(blog),
  };
});
