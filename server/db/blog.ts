import { prisma } from ".";

export const createBlog = (blogData: any) => {
  return prisma.blog.create({
    data: blogData,
  });
};

export const getBlogs = (params: any = {}) => {
  return prisma.blog.findMany({
    ...params,
  });
};

export const verifyBlog = (params: any) => {
  // Adjust the type of params as needed
  return prisma.blog.findUnique({
    where: {
      title: params.title,
      ...params.where, // If you need to include additional where conditions
    },
    include: params.include, // Include any additional includes
  });
};
