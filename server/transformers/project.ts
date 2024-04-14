import { title } from "process";

export const projectTransformer = (projectData: any) => {
  return {
    id: projectData.id,
    title: projectData.title,
    description: projectData.description,
  };
};
