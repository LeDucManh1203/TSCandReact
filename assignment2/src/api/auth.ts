import instance from ".";
import { SigninForm, SignupForm } from "../models";

export const signup = (data: SignupForm) => {
    const uri = "/signup";
    return instance.post(uri, data);
}

export const signin = (data: SigninForm) => {
    const uri = "/signin";
    return instance.post(uri, data);
}

export const getAll = () => {
    const uri = "/users";
    return instance.get(uri);
}
export const remove = (id: number | string) => {
    const uri = "/users/" + id
    return instance.delete(uri)
}