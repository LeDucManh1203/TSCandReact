import * as Yup from 'yup';
export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: {base_url: string}[],
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
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
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
})


export type SignupForm = Yup.InferType<typeof SignupSchema>
