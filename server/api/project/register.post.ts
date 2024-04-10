import { createProject } from "~/server/db/project";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { title, description, image, problem, solutions, completed, target } =
    body;

  if (
    !title ||
    !description ||
    !image ||
    !problem ||
    !solutions ||
    completed === null ||
    !target
  ) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Missing required field" })
    );
  }

  const projectData = {
    title,
    description,
    image,
    problem,
    solutions,
    completed,
    target,
  };

  const project = await createProject(projectData);

  return {
    body: project,
  };
});
