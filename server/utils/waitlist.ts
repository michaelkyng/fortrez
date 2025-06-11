const { waitList } = useRuntimeConfig().public;

export const handleEmailWaitlist = async (email: string) => {
  const formData = new FormData();

  formData.append("Emails", email);
  try {
    await $fetch(waitList, {
      method: "post",
      redirect: "follow",
      body: formData,
    });

    return true;
  } catch (error) {
    return false;
  }
};
