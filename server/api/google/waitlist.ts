import { handleEmailWaitlist } from "~/server/utils/waitlist";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email } = body;

    const response = await handleEmailWaitlist(email);

    return response;
  } catch (error) {
    return false;
  }
});
