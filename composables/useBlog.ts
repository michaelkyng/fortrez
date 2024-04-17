export default () => {
  const createBlog = (blogData: any) => {
    const form = new FormData();
    form.append("title", blogData.title);
    form.append("description", blogData.description);
    form.append("tags", blogData.tags);
    form.append("category", blogData.category);

    blogData.mediaFiles.forEach((mediaFile: any, index: number) => {
      form.append("media_file_" + index, mediaFile);
    });

    return useFetchApi("/api/blog/register", {
      method: "post",
      body: form,
    });
  };

  const getBlogs = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/blog", {
          method: "get",
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const verifyBlog = (title: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/blog/verify", {
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
    createBlog,
    getBlogs,
    verifyBlog,
  };
};
