import UrlPattern from "url-pattern";
import { decodeAccessToken } from "~/server/utils/jwt";
import { getAdminById } from "../db/admin";
export default defineEventHandler(async (event) => {
  const endpoints = [
    "/api/auth/admin/admin",
    "/api/project/register",
    "/api/blog/register",
  ];

  const isHandledByThisMiddleware = endpoints.some((endpoints) => {
    const pattern: any = new UrlPattern(endpoints);

    return pattern.match(event.node.req.url);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }

  const token = event.node.req.headers["authorization"]?.split(" ")[1];

  const decoded: any = decodeAccessToken(token);

  if (!decoded) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );
  }

  try {
    const adminId = decoded.adminId;
    const admin = await getAdminById(adminId);
    event.context.auth = { admin };
  } catch (error) {
    return;
  }
});
