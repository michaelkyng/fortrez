import { adminTransformer } from "~/server/transformers/admin";

export default defineEventHandler(async (event) => {
  return {
    admin: adminTransformer(event.context.auth?.admin),
  };
});
