export default () => {
  const addToWaitlist = async (email: string): Promise<boolean> => {
    const emailResponse = await $fetch<boolean>("/api/google/waitlist", {
      method: "post",
      body: { email },
    });
    return emailResponse;
  };

  return { addToWaitlist };
};
