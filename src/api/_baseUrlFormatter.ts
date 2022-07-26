import config from '../config/config';

const { baseUrl, devUrl, useDev } = config;

export const baseUrlFormatter = (route: string, dev = useDev): string => {
	return dev ? devUrl + route : baseUrl + route;
};
