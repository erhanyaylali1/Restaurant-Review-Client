import axios from "axios";

class ApiCall {
	private api = axios.create({
		baseURL: process.env.REACT_APP_SERVER_URL,
	});

	public async sign_in_with_socials(user: IUser): Promise<string> {
		return await this.api.post("user/sign-up", user);
	}
}

export default new ApiCall();

export interface IUser {
	first_name: string;
	last_name: string;
	email: string;
	token?: string;
	password?: string;
	image?: string;
}
