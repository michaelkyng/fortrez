export default () => {
  const createProject = (projectData: any) => {
    const form = new FormData();
    form.append("title", projectData.title);
    form.append("description", projectData.description);
    form.append("problem", projectData.problem);
    form.append("solutions", projectData.solutions);
    form.append("category", projectData.category);
    form.append("type", projectData.type);
    form.append("target", projectData.target);

    projectData.mediaFiles.forEach((mediaFile: any, index: number) => {
      form.append("media_file_" + index, mediaFile);
    });

    return useFetchApi("/api/project/register", {
      method: "post",
      body: form,
    });
  };

  const getProjects = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/project", {
          method: "get",
        });
        resolve(response);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const getFProjects = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/project/f", {
          method: "get",
        });
        resolve(response);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const verifyProject = (title: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/project/verify", {
          method: "post",
          body: { title },
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    createProject,
    getProjects,
    getFProjects,
    verifyProject,
  };
};
