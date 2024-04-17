import { prisma } from ".";

export const createProject = (projectData: any) => {
  return prisma.project.create({
    data: projectData,
  });
};

export const getProjects = (params: any = {}) => {
  return prisma.project.findMany({
    ...params,
    where: {
      type: "Other Project",
    },
  });
};

export const getFProjects = (params: any = {}) => {
  return prisma.project.findMany({
    ...params,
    where: {
      type: "Foundation",
    },
  });
};

export const verifyProject = (params: any) => {
  // Adjust the type of params as needed
  return prisma.project.findUnique({
    where: {
      title: params.title,
      ...params.where, // If you need to include additional where conditions
    },
    include: params.include, // Include any additional includes
  });
};
