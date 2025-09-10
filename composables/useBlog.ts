export default () => {
  // const createBlog = async (blogData: any) => {
  //   const form = new FormData();
  //   form.append("title", blogData.title);
  //   form.append("description", blogData.description);
  //   form.append("tags", blogData.tags);
  //   form.append("category", blogData.category);

  //   blogData.mediaFiles.forEach((mediaFile: any, index: number) => {
  //     form.append("media_file_" + index, mediaFile);
  //   });

  //   return await $fetch('/api/blog/register', {
  //     method: 'POST',
  //     body: form
  //   });
  // };

  const getBlogs = async () => {
    return await $fetch('/api/blog');
  };

  const getBlog = async (id: string) => {
    return await $fetch(`/api/blog/${id}`);
  };

  return {
    // createBlog,
    getBlogs,
    getBlog
    // verifyBlog,
  };
};
