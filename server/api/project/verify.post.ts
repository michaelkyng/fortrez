import { verifyProject } from "~/server/db/project";
import { projectTransformer } from "~/server/transformers/project";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { title } = body;

  const project = await verifyProject({
    where: {},
    include: {
      mediaFiles: true,
      transactions: true,
    },
    title,
  });

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found",
    });
  }

  return {
    project: projectTransformer(project),
  };
});
