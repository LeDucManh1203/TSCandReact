import * as Yup from 'yup';
export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: { base_url: string }[],
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
}
export interface IUser {
    id: string,
    name: string,
    email: string,
    role: string,
    password: string,
}

export interface ISpecification {
    name: string,
    attributes: {
        code: string,
        name: string,
        value: string
    }
}

export const SignupSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    role: Yup.string().required("role is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
})
export type SignupForm = Yup.InferType<typeof SignupSchema>

export const SigninSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
})
export type SigninForm = Yup.InferType<typeof SigninSchema>

export const updateSchema = Yup.object({
    name: Yup.string().required("First name is required"),
    price: Yup.number().required("Email is required"),
    original_price: Yup.number().required("Email is required"),
    description: Yup.string().min(6,"Tối thiểu 10 ký tự").required("Password is required"),
})
export type updateForm = Yup.InferType<typeof updateSchema>