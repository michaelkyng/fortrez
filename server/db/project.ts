import { Prisma } from "@prisma/client";
import { prisma } from ".";

export const createProject = (projectData: any) => {
  return prisma.project.create({
    data: projectData,
  });
};

export const getProjects = (params: any = {}) => {
  return prisma.project.findMany({
    ...params,
  });
};

export const getOtherProjects = (params: any = {}) => {
  return prisma.project.findMany({
    ...params,
    where: {
      type: "Other",
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
  return prisma.project.findUnique({
    where: {
      title: params.title,
      ...params.where,
    },
    include: params.include,
  });
};
