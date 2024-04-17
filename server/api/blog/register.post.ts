import { createBlog } from "~/server/db/blog";
import { createMediaFile } from "~/server/db/mediafiles";
import formidable from "formidable";
import { uploadToCloudinary } from "~/server/utils/cloudinary";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  const response: any = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }

      resolve({ fields, files });
    });
  });

  const { fields, files } = response;

  const adminId = event.context.auth?.admin?.id;

  const blogData = {
    title: fields.title[0],
    description: fields.description[0],
    tags: fields.tags[0],
    category: fields.category[0],
    authorId: adminId,
  };

  if (
    !blogData.title ||
    !blogData.description ||
    !blogData.tags ||
    !blogData.category
  ) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Missing required field" })
    );
  }

  const blog = await createBlog(blogData);

  const filePromises = Object.keys(files).map(async (key) => {
    const file = files[key][0];
    if (!file) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: "Missing Image File" })
      );
    }
    const CloudinaryResource: any = await uploadToCloudinary(file.filepath);

    return createMediaFile({
      url: CloudinaryResource.secure_url,
      providerPublicId: CloudinaryResource.public_id,
      adminId: adminId,
      blogId: blog.id,
    });
  });

  await Promise.all(filePromises);

  return {
    blog: blog,
  };
});
