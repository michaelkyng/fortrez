export const userTransformer = (userData: any) => {
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email,
  };
};
