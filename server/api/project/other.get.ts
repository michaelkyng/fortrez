import { getOtherProjects } from "~/server/db/project";
import { projectTransformer } from "~/server/transformers/project";

export default defineEventHandler(async () => {
  const projects = await getOtherProjects({
    include: {
      author: true,
      mediaFiles: true,
      transactions: true,
    },

    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return {
    projects: projects.map(projectTransformer),
  };
});
