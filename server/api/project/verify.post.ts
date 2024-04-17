import { verifyProject } from "~/server/db/project";
import { fprojectTransformer } from "~/server/transformers/fproject";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { title } = body;
  const project = await verifyProject({
    where: {}, // Add any additional where conditions if needed
    include: {
      mediaFiles: true,
      transactions: true,
    },
    title, // Pass the title as part of the params object
  });
  return {
    project: fprojectTransformer(project),
  };
});
