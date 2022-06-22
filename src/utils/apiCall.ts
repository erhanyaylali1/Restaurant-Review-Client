import axios from "axios";

class ApiCall {
  private api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  public async sign_up(user: IUser): Promise<ISignInResponse> {
    return await this.api.post("user/sign-up", user);
  }

  public async sign_in(user: IUserSignIn): Promise<ISignInResponse> {
    return await this.api.post("user/sign-in", user);
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

export interface IUserSignIn {
  email: string;
  password?: string;
  token?: string;
}

export interface ISignInResponse {
  data: {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    token: string;
    image: string;
  };
}
