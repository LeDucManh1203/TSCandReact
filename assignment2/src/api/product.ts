import instance from ".";
import { IProduct, updateForm } from "../models";
export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const create = (body: IProduct) => {
    const uri = "/products"
    return instance.post(uri, body)
}

export const remove = (id: number | string) => {
    const uri = "/products/" + id
    return instance.delete(uri)
}

export const getById = (id: number | string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}

export const update = (id: number | string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}