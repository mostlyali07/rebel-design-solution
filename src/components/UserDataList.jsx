import React, { useState, useEffect } from 'react';
import BlogForm from './BlogForm';
import swal from 'sweetalert';

const UserDataList = () => {
    const [userList, setUserList] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUserData, setEditedUserData] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://rebel-design-solutions-default-rtdb.firebaseio.com/userDataRecords.json");
                const data = await response.json();
                const userList = Object.keys(data).map((key) => ({
                    id: key,
                    ipAddress: data[key].ipAddress, // Include the ipAddress property
                    ...data[key],
                }));
                setUserList(userList);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    // const handleDelete = async (userId) => {
    //     try {
    //         await fetch(`https://rebel-design-solutions-default-rtdb.firebaseio.com/userDataRecords/${userId}.json`, {
    //             method: "DELETE",
    //         });
    //         setUserList(userList.filter((user) => user.id !== userId));
    //     } catch (error) {
    //         console.error("Error deleting user data:", error);
    //     }
    // };
    const handleDelete = async (userId) => {
        const confirmDelete = await swal({
            title: "Are you sure you want to delete this user's information?",
            text: "This action cannot be undone.",
            icon: "warning",
            buttons: ["Cancel", "Delete"],
        });

        if (confirmDelete) {
            try {
                await fetch(`https://rebel-design-solutions-default-rtdb.firebaseio.com/userDataRecords/${userId}.json`, {
                    method: "DELETE",
                });
                setUserList(userList.filter((user) => user.id !== userId));
            } catch (error) {
                console.error("Error deleting user data:", error);
            }
        }
    };


    const handleEdit = (userId) => {
        setEditingUserId(userId);
        const userToEdit = userList.find((user) => user.id === userId);
        // Exclude IP address from editable fields
        const { ipAddress, ...userData } = userToEdit;
        setEditedUserData(userData);
    };

    const handleSave = async () => {
        try {
            await fetch(`https://rebel-design-solutions-default-rtdb.firebaseio.com/userDataRecords/${editingUserId}.json`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editedUserData),
            });

            setUserList((prevUserList) =>
                prevUserList.map((user) =>
                    user.id === editingUserId ? { ...user, ...editedUserData } : user
                )
            );

            setEditingUserId(null);
        } catch (error) {
            console.error("Error saving user data:", error);
        }
    };

    const handleCancel = () => {
        setEditingUserId(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const filteredUserList = userList.filter((user) =>
        user.yourName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container-fliud">
            <div className="row">
                <div className="col-md-4"></div>
                <div className='col-md-4 bg-dark py-4 rounded px-5'>
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='form-control form-control-sm'
                    />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row my-2">
                <div className="col-md-12">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Website</th>
                                <th scope="col">Services</th>
                                <th scope="col">Message</th>
                                <th scope="col">Date/Time</th>
                                <th scope="col">IP Address</th>
                                <th scope="col">Target URL</th>
                                <th scope="col">Modify Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUserList.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {editingUserId === user.id ? (
                                            <input
                                                className="form-control form-control-sm"
                                                type="text"
                                                name="yourName"
                                                value={editedUserData.yourName || ''}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            user.yourName
                                        )}
                                    </td>
                                    <td>
                                        {editingUserId === user.id ? (
                                            <input
                                                className="form-control form-control-sm"
                                                type="email"
                                                name="yourEmail"
                                                value={editedUserData.yourEmail || ''}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            user.yourEmail
                                        )}
                                    </td>
                                    <td>
                                        {editingUserId === user.id ? (
                                            <input
                                                className="form-control form-control-sm"
                                                type="tel"
                                                name="yourPhone"
                                                value={editedUserData.yourPhone || ''}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            user.yourPhone
                                        )}
                                    </td>
                                    <td>
                                        {editingUserId === user.id ? (
                                            <input
                                                className="form-control form-control-sm"
                                                type="text"
                                                name="yourWebite"
                                                value={editedUserData.yourWebite || ''}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            user.yourWebite
                                        )}
                                    </td>
                                    <td>
                                        {editingUserId === user.id ? (
                                            <input
                                                className="form-control form-control-sm"
                                                type="text"
                                                name="yourServices"
                                                value={editedUserData.yourServices || ''}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            user.yourServices
                                        )}
                                    </td>
                                    <td>
                                        {editingUserId === user.id ? (
                                            <input
                                                className="form-control form-control-sm"
                                                name="message"
                                                value={editedUserData.message || ''}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            user.message
                                        )}
                                    </td>
                                    <td>{user.submissionTime}</td>
                                    <td>{user.ipAddress}</td>
                                    <td>{user.submissionUrl}</td>
                                    <td>
                                        {editingUserId === user.id ? (
                                            <>
                                                <button className="btn btn-success" onClick={handleSave}>
                                                    Save
                                                </button>
                                                &nbsp;
                                                <button className="btn btn-secondary" onClick={handleCancel}>
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="btn btn-primary" onClick={() => handleEdit(user.id)}>
                                                    Edit
                                                </button>
                                                &nbsp;
                                                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"> </div>
                <div className="col-md-8">
                    <BlogForm />
                </div>
                <div className="col-md-2"> </div>
            </div>
        </div>
    );
};

export default UserDataList;
