import React, { useState, useEffect } from "react";
import axios from "axios";
import './ListUser.scss'
import { toast } from 'react-toastify';
import { data, Link } from "react-router-dom";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8888/users');
        setUsers(res.data);
        console.log('>>>Response data: ', res.data);
      } catch (err) {
        console.error(">>>Error fetching data: ", err);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    const userId = Number(id);

    try {
      const res = await axios.delete(`http://localhost:8888/users/${userId}`);
      toast.success("User Deleted Successfully!");
      setUsers(users.filter(user => user.id !== id));
      console.log("User deleted:", res.data);
    } catch (error) {
      console.error(">>>Error deleting user: ", error);
      toast.error("Failed to delete user!");
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email || ''
    });
    setShowEditForm(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error("Please enter a valid user name!");
      return;
    }

    try {
      const res = await axios.patch(`http://localhost:8888/users/${editingUser.id}`, {
        name: formData.name.trim(),
        email: formData.email.trim()
      });
      
      setUsers(users.map(user =>
        user.id === editingUser.id 
          ? { ...user, name: formData.name.trim(), email: formData.email.trim() } 
          : user
      ));
      
      toast.success("User Edited Successfully!");
      console.log("User patched:", res.data);
      handleCloseEditForm();
    } catch (error) {
      console.error(">>>Error updating user: ", error);
      toast.error("Failed to edit user!");
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error("Please enter a valid user name!");
      return;
    }

    const newUser = {
      id: String(users.length + 1),
      name: formData.name.trim(),
      email: formData.email.trim() || "newuser@example.com",
      createdAt: new Date().toISOString(),
      password: "1",
    };

    try {
      const res = await axios.post('http://localhost:8888/users', newUser);
      setUsers([...users, newUser]);
      toast.success("New User Added Successfully!");
      handleCloseAddForm();
    } catch (error) {
      console.error(">>>Error adding new user: ", error);
      toast.error("Failed to add new user!");
    }
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
    setFormData({ name: '', email: '' });
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setEditingUser(null);
    setFormData({ name: '', email: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div>This is User List</div>
      <button 
        onClick={() => setShowAddForm(true)} 
        className="button-3" 
        type="button"
      >
        Add New User
      </button>

      {/* Add User Form */}
      {showAddForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h3>Add New User</h3>
            <form onSubmit={handleAddSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="button-3">Add User</button>
                <button 
                  type="button" 
                  className="button-24" 
                  onClick={handleCloseAddForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Form */}
      {showEditForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h3>Edit User</h3>
            <form onSubmit={handleEditSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="button-3">Update User</button>
                <button 
                  type="button" 
                  className="button-24" 
                  onClick={handleCloseEditForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
                  <button 
                    onClick={() => handleDeleteUser(user.id)}
                    className="button-24" 
                    type="button" 
                  >
                    Delete
                  </button>
                  <button 
                    onClick={() => handleEditUser(user)} 
                    className="button-3" 
                    type="button"
                  >
                    Edit
                  </button>
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
          ) : (
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
};

export default ListUsers;