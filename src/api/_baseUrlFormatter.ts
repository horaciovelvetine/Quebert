import config from '../config/config';

let { baseUrl } = config;

export const baseUrlFormatter = (route: string): string => {
	return baseUrl + route;
};
