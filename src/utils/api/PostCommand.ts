import axios from 'axios';
import { requestUrl } from './requestUrlFormatter';
type PostCommandProps = {
	name: string;
	payload: string;
};

export const PostCommand = async (command: PostCommandProps) => {
	try {
		return await axios
			.post(requestUrl(`/command/${command.name}/${command.payload}`), command)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});
	} catch (err) {
		return err;
	}
};
