import { getRefreshTokenByToken } from "~/server/db/refreshTokens";
import { verifyExpRefreshToken, generateToken } from "~/server/utils/jwt";
import { getAdminById } from "~/server/db/admin";

export default defineEventHandler(async (event) => {
  const cookie = getCookie(event, "refresh_token");

  const refreshToken = cookie;
  if (!refreshToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized - Invalid Refresh Token",
      })
    );
  }

  const rToken = await getRefreshTokenByToken(refreshToken);

  if (!rToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized - Invalid Refresh Token",
      })
    );
  }

  const token: any = verifyExpRefreshToken(refreshToken);

  try {
    const admin: any = await getAdminById(token.adminId);

    const { accessToken } = generateToken(admin);

    return {
      access_token: accessToken,
    };
  } catch (error) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Something went wrong",
      })
    );
  }
});
