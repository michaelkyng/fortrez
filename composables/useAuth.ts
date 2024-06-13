import { jwtDecode } from "jwt-decode";

export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthAdmin = () => useState("auth_admin");
  const useAuthLoading = () => useState("auth_loading", () => true);

  const setToken = (newToken: any) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };
  const setAdmin = (newAdmin: any) => {
    const authAdmin = useAuthAdmin();
    authAdmin.value = newAdmin;
  };
  const setLoading = (value: boolean) => {
    const authLoading = useAuthLoading();
    authLoading.value = value;
  };

  const login = (data: any) => {
    const { email, password } = data;
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/admin/login", {
          method: "POST",
          body: {
            email,
            password,
          },
        });
        setToken(data.access_token);
        setAdmin(data.admin);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/admin/refresh");
        setToken(data.access_token);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getAdmin = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data: any = await useFetchApi("/api/auth/admin/admin");
        setAdmin(data.admin);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const reRefreshAccessToken = () => {
    const authToken: any = useAuthToken();

    if (!authToken.value) {
      return;
    }

    const jwt: any = jwtDecode(authToken.value);
    const RefreshTime = jwt.exp - 60000;

    setTimeout(async () => {
      await refreshToken();
      reRefreshAccessToken();
    }, RefreshTime);
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setLoading(true);
      try {
        await refreshToken();
        await getAdmin();

        reRefreshAccessToken();

        resolve(true);
      } catch (error) {
        reject(error);
      } finally {
        setLoading(false);
      }
    });
  };

  return {
    login,
    useAuthAdmin,
    useAuthToken,
    useAuthLoading,
    initAuth,
  };
};
