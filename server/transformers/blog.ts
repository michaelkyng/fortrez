import { format } from "date-fns";
import { mediaFilesTransformer } from "./mediaFiles";
const date = new Date();
export const blogTransformer = (blogData: any) => {
  const date = new Date(blogData.createdAt);
  const formattedDate = format(date, "EEE, dd MMM yyyy");
  return {
    id: blogData.id,
    title: blogData.title,
    description: blogData.description,
    tags: blogData.tags,
    category: blogData.category,
    mediaFiles: blogData.mediaFiles,
    createdAt: formattedDate,
  };
};
