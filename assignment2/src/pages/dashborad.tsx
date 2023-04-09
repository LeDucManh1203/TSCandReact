import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { IProduct } from "../models"
import { getAll, remove } from "../api/product"

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    const { id } = useParams()

    const handleDelete = async (id: string) => {
        if(window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này?")){
        await remove(id)
        fetchProducts()
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])




    return <>
        <h2>Product list</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm my-7">
                <thead className="">
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hình ảnh
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left text-xl text-[white] rounded-md  bg-[black]">
                            <Link to={"/admin/add"}>Thêm mới</Link>

                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <Link to={`/admin/product/${product.id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[80%]" src={product.images?.[0].base_url} alt="" />
                            </td>
                            <td className="text-center">
                                <button className="bg-red-600 text-white rounded-md p-2 " onClick={() => handleDelete(product.id)}  >Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </>
}

export default Dashboard