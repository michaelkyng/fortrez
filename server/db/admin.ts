import { prisma } from ".";

export const getAdminByEmail = (email: any) => {
  return prisma.admin.findUnique({
    where: {
      email,
    },
  });
};

export const getAdminById = (adminId: any) => {
  return prisma.admin.findUnique({
    where: {
      id: adminId,
    },
  });
};
