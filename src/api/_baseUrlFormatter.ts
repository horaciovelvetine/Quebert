import config from '../config/config';

const { baseUrl, devUrl } = config;

export const baseUrlFormatter = (route: string, dev = false): string => {
	return dev ? devUrl + route : baseUrl + route;
};

