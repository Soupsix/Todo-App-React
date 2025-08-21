import React, { useState, useEffect } from "react";
import axios from "axios";
import './ListUser.scss'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users?page=2');
        setUsers(res.data);
        console.log('>>>Response data: ', res.data);
      } catch (err) {
        console.error(">>>Error fetching data: ", err);
      }
    };

    //Gọi hàm
    fetchUsers();
  }, [])


  const hanldeDeleteUser = (userId) => {
    // Xử lý xóa người dùng tại đây 
    console.log(">>> Delete user with ID: ", userId);
    toast.success("User Deleted Successfully!"); // Show success message
    setUsers(users.filter(user => user.id !== userId));
  }



  const handleEditUser = (id) => {
    const newTitle = prompt('Edit users:');
    if (newTitle && newTitle.trim()) {
      setUsers(users.map(user =>
        user.id === id ? { ...user, name: newTitle.trim() } : user
      ));
      toast.success("User Edited Successfully!"); // Show success message
    }
  };

  const addNewUser = () => {
    const newName  = prompt('Enter new user name:');

    if (newName  && newName .trim()) {
      const newUser = {
        id: users.length + 1, // Tạo ID mới dựa trên độ dài của mảng users
        name: newName .trim(),
        email: "newuser@example.com", // hoặc để rỗng ""
        phone: "000-000-0000",        // fake default
        website: "newuser.com"
      }

      setUsers([...users, newUser]);
      toast.success("New User Added Successfully!"); // Show success message
    } else {
      toast.error("Please enter a valid user name!"); // Show error message
    }


  }

  //   useEffect(() => {
  //     axios.get('https://jsonplaceholder.typicode.com/users?page=2')
  //       .then((res) => {
  //         setUsers(res.data);
  //         console.log(">>> Check users: ", res.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching users:", error);
  //       });
  //   }, []);

  return (
    <>
      <div>This is User List</div>
      <button onClick={addNewUser} className="button-3" type="button">
        Add New User
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td className="td-btn-all">
                  <button onClick={() => hanldeDeleteUser(user.id)}
                    className="button-24" type="button" >
                    Delete
                  </button>
                  <button onClick={() => handleEditUser(user.id)} className="button-3" type="button">Edit</button>
                </td>
                <td>
                  <Link to={`${user.id}`}>
                    <button type="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          )
            :
            (
              <tr colSpan="6" style={{ textAlign: "center" }}>
                <td>
                  No data available
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </>
  );
}

export default ListUsers;
