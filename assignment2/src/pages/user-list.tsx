import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAll, remove } from '../api/auth'
import { useParams } from 'react-router-dom'
import { IUser } from '../models'

const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([])

    const fetchUsers = async () => {
        const { data } = await getAll()
        setUsers(data)
    }

    const { id } = useParams()

    const handleDelete = async (id: string) => {
        if (window.confirm("Bạn có chắc chắn muốn xoá user này?")) {
            await remove(id)
            fetchUsers()
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <div>
            <h2>User list</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm my-7">
                    <thead className="">
                        <tr>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Tên người dùng
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Email
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Vai trò
                            </th>


                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Thao tác
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <Link to={`/admin/product/${user.id}`}>
                                        {user.name}
                                    </Link>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.role}</td>

                                <td className="text-center">
                                    <button className="bg-red-600 text-white rounded-md p-2 " onClick={() => handleDelete(user.id)}  >Xoá</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList;