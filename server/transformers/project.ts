import { mediaFilesTransformer } from "./mediaFiles";
import { transactionsTransformer } from "./transactions";
import type { ProjectWithRelations } from "~/types/type";

export const projectTransformer = (projectData: ProjectWithRelations) => {
  const transactionsCount = projectData.transactions?.length ?? 0;

  return {
    id: projectData.id,
    title: projectData.title,
    description: projectData.description,
    funded: projectData.funded,
    pending: projectData.pending,
    problem: projectData.problem,
    solutions: projectData.solutions,
    category: projectData.category,
    type: projectData.type,
    donors: projectData.donors ?? 0,
    target: projectData.target,
    completed: projectData.completed,
    mediaFiles: projectData.mediaFiles?.map(mediaFilesTransformer) ?? [],
    transactions: projectData.transactions?.map(transactionsTransformer) ?? [],
    createdAt: projectData.createdAt,
  };
};
