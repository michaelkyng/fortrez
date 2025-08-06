import { prisma } from ".";

export const getUserByEmail = (email: any) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserById = (adminId: any) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
