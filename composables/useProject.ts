import type { ProjectWithRelations } from "~/types/type";

type CreateProjectPayload = {
  title: string;
  description: string;
  problem: string;
  solutions: string[];
  category: string;
  type: string;
  target: number;
  mediaFiles: File[]; // NEW name avoids conflict
};

export default () => {
  const createProject = (projectData: CreateProjectPayload) => {
    const form = new FormData();

    form.append("title", projectData.title);
    form.append("description", projectData.description);
    form.append("problem", projectData.problem);
    projectData.solutions.forEach((solution) => {
      form.append("solutions[]", solution);
    });
    form.append("category", projectData.category);
    form.append("type", projectData.type);
    form.append("target", projectData.target.toString());

    projectData.mediaFiles.forEach((mediaFile, index) => {
      form.append("media_file_" + index, mediaFile);
    });

    return useFetchApi("/api/project/register", {
      method: "post",
      body: form,
    });
  };

  const getProjects = async (): Promise<{
    projects: ProjectWithRelations[];
  }> => {
    try {
      const response = await useFetchApi("/api/project", {
        method: "get",
      });

      return response as { projects: ProjectWithRelations[] };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getFProjects = async (): Promise<{
    Fprojects: ProjectWithRelations[];
  }> => {
    try {
      const response = await useFetchApi("/api/project/f", {
        method: "get",
      });

      return response as { Fprojects: ProjectWithRelations[] };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const verifyProject = async (title: string): Promise<any> => {
    try {
      const response = await useFetchApi("/api/project/verify", {
        method: "post",
        body: { title },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    createProject,
    getProjects,
    getFProjects,
    verifyProject,
  };
};
