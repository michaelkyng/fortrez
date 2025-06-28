import { adminTransformer } from "~/server/transformers/admin";
import { getAdminByEmail } from "~/server/db/admin";
import bcrypt from "bcrypt";
import { generateToken, sendRefreshToken } from "~/server/utils/jwt";
import { createRefreshToken } from "~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, password } = body;

  if (!email || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  // Is admin registered

  const admin = await getAdminByEmail(email);

  if (!admin) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Email or Password Incorrect",
      })
    );
  }

  // compare password

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Email or Password Incorrect",
      })
    );
  }

  // Generate tokens
  const { accessToken, refreshToken } = generateToken(admin);

  // save Refresh Token to DB
  await createRefreshToken({
    token: refreshToken,
    adminId: admin.id,
  });

  // MAke http only cookie
  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    admin: adminTransformer(admin),
  };
});
