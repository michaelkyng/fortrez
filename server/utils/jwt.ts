import jwt from "jsonwebtoken";
const getAccessToken = (admin: any) => {
  const config = useRuntimeConfig();

  return jwt.sign({ adminId: admin.id }, config.jwtAccessSecret, {
    expiresIn: "10m",
  });
};
const getRefreshToken = (admin: any) => {
  const config = useRuntimeConfig();

  return jwt.sign({ adminId: admin.id }, config.jwtRefreshSecret, {
    expiresIn: "4h",
  });
};

export const decodeAccessToken = (token: any) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtAccessSecret);
  } catch {
    return null;
  }
};

export const verifyExpRefreshToken = (refreshToken: any) => {
  const config = useRuntimeConfig();

  try {
    {
      return jwt.verify(refreshToken, config.jwtRefreshSecret);
    }
  } catch (error) {
    return null;
  }
};
export const generateToken = (admin: object) => {
  const accessToken = getAccessToken(admin);
  const refreshToken = getRefreshToken(admin);

  return {
    accessToken,
    refreshToken,
  };
};

export const sendRefreshToken = (event: any, token: any) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
  });
};
