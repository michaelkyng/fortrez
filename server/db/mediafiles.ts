import { prisma } from ".";

export const createMediaFile = (mediaFile: any) => {
  return prisma.mediaFiles.create({
    data: mediaFile,
  });
};
