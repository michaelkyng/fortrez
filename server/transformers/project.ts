import { mediaFilesTransformer } from "./mediaFiles";
import { transactionsTransformer } from "./transactions";

export const projectTransformer = (projectData: any) => {
  return {
    id: projectData.id,
    title: projectData.title,
    description: projectData.description,
    problem: projectData.problem,
    solutions: projectData.solutions,
    category: projectData.category,
    type: projectData.type,
    donors: !!projectData.transactions ? projectData.transactions.length : 0,
    funded: !!projectData.transactions ? projectData.transactions.length : 0,
    verifiedFunded: projectData.verifiedFunded,
    target: projectData.target,
    completed: projectData.completed,
    mediaFiles: projectData.mediaFiles.map(mediaFilesTransformer),
    transactions: projectData.transactions.map(transactionsTransformer),
  };
};
