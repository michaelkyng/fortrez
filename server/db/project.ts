import { prisma } from ".";

export const createProject = (projectData: any) => {
  return prisma.project.create({
    data: projectData,
  });
};
