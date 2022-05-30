import config from '../dev/config';

let { baseUrl } = config;

export const requestUrl = (route: string): string => {
	return baseUrl + route;
};
