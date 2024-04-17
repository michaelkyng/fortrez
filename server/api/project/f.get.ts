import { getFProjects } from "~/server/db/project";
import { projectTransformer } from "~/server/transformers/project";

export default defineEventHandler(async () => {
  const projects = await getFProjects({
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
    Fprojects: projects.map(projectTransformer),
  };
});
