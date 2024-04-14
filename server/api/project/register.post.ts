import { createProject } from "~/server/db/project";
import { createMediaFile } from "~/server/db/mediafiles";
import formidable from "formidable";
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
  const solutions = fields.solutions[0].split("----");

  const projectData = {
    title: fields.title[0],
    description: fields.description[0],
    problem: fields.problem[0],
    solutions: solutions,
    completed: Boolean(fields.completed[0]),
    donors: Number(fields.donors[0]),
    funded: Number(fields.funded[0]),
    target: Number(fields.target[0]),
    authorId: adminId,
    image: "Test",
  };

  if (
    !projectData.title ||
    !projectData.description ||
    // !projectData.image ||
    !projectData.problem ||
    !projectData.solutions ||
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
    return createMediaFile({
      url: "",
      providerPublicId: "Random_Id",
      adminId: adminId,
      projectId: project.id,
    });
  });

  await Promise.all(filePromises);

  return {
    // project: projectTransformer(project),
    files,
  };
});
