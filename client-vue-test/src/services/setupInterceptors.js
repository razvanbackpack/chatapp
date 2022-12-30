
import axiosInstance from "./api";
import TokenService from "./token.service";
import EventBus from '../common/EventBus';

const setup = (store) => {
	axiosInstance.interceptors.request.use(
		(config) => {
			const token = TokenService.getToken();
			if (token) {
				// config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
				config.headers["x-access-token"] = token; // for Node.js Express back-end
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	axiosInstance.interceptors.response.use(
		(res) => {
			return res;
		},
		async (err) => {
			const originalConfig = err.config;

			if (originalConfig.url !== "/auth/login" && err.response) {
				if (err.response.status === 401 && !originalConfig._retry) {
					originalConfig._retry = true;

					try {
						// if post call fails with unauthorized,
						// the interceptor will automatically fire a refreshToken call to 
						// see if current token is expired
						
						const rs = await axiosInstance.post("/auth/refreshToken", {
							refreshToken: TokenService.getToken(),
						});

						const { accessToken } = rs.data;

						store.dispatch('auth/refreshToken', accessToken);
						TokenService.setToken(accessToken);

						return axiosInstance(originalConfig);
					} catch (_error) {
						EventBus.dispatch("logout");
						return Promise.reject(_error);
					}
				}
			}

			return Promise.reject(err);
		}
	);
};

export default setup;