import instance from ".";
import { SignupForm } from "../models";

const signup = (data: SignupForm) => {
    const uri = "/signup";
    return instance.post(uri, data);
}

export default signup