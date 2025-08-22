import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailUsers = () => {

    const { id } = useParams();
    const [users, setUsers] = useState(null);

    //useEffect
    useEffect(() => {
        const fetchUser = async () => {

            try {
                const res = await axios.get(`http://localhost:8888/users/${id}`);
                setUsers(res.data);
                console.log('>>>Response data: ', res.data);
            } catch (error) {
                console.error(">>>Error fetching user data: ", error);
            }
        }
        fetchUser();
    }, [id])

    if (!users) {
        return <div>Loading...</div>; // Hiển thị loading khi chưa có dữ liệu   
    }

    return (
        <>
            <div key={users.id} className="user-detail">
                <h2>User Detail</h2>
                <p><strong>ID:</strong> {users.id}</p>
                <p><strong>Name:</strong> {users.name}</p>
                <p><strong>Email:</strong> {users.email}</p>
            </div>
        </>
    )
}

export default DetailUsers