export const adminTransformer = (adminData: any) => {
  return {
    id: adminData.id,
    name: adminData.name,
    email: adminData.email,
  };
};
