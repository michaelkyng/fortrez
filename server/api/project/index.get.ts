import { getProjects } from "~/server/db/project";
import { projectTransformer } from "~/server/transformers/project";

export default defineEventHandler(async () => {
  const projects = await getProjects();

  return {
    projects: projects.map(projectTransformer),
  };
});
