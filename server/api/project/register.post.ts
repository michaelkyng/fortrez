import { createProject } from "~/server/db/project";
import { createMediaFile } from "~/server/db/mediafiles";
import formidable from "formidable";
import { uploadToCloudinary } from "~/server/utils/cloudinary";
import { projectTransformer } from "~/server/transformers/project";

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
  const sample = fields.solutions[0];
  const solutions = sample.split("--");

  const projectData = {
    title: fields.title[0],
    description: fields.description[0],
    problem: fields.problem[0],
    solutions: solutions,
    category: fields.category[0],
    type: fields.type[0],
    completed: false,
    donors: null,
    funded: null,
    target: Number(fields.target[0]),
    authorId: adminId,
  };

  if (
    !projectData.title ||
    !projectData.description ||
    !projectData.problem ||
    !projectData.solutions ||
    !projectData.category ||
    !projectData.type ||
    projectData.completed === null ||
    !projectData.target
  ) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Missing required field" })
    );
  }

  const project = await createProject(projectData);

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
      projectId: project.id,
    });
  });

  await Promise.all(filePromises);

  return {
    project: project,
  };
});
