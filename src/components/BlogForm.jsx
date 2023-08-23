import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as rtdbRef, push, remove, set, onValue } from 'firebase/database';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS
import ReactQuill from 'react-quill'; // Import the React Quill component


const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        const database = getDatabase();
        const blogsRef = rtdbRef(database, 'blogs');

        // Listen for changes in the Realtime Database and update 'blogs' state
        const unsubscribe = onValue(blogsRef, (snapshot) => {
            const blogsData = [];
            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val(); // Get the data from the snapshot
                const id = childSnapshot.key; // Get the key as the ID

                blogsData.push({ id, ...data });
            });
            setBlogs(blogsData);
        });

        return () => {
            // Unsubscribe when the component unmounts
            unsubscribe();
        };
    }, []);


    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage && selectedImage.size <= 1024 * 1024) {
            setImage(selectedImage);
        } else {
            setImage(null);
            alert('Please select an image of size up to 1MB.');
        }
    };

    const handleSubmit = async () => {
        // Upload image to Storage
        const storage = getStorage();
        const storageRef = ref(storage, `blogImages/${image.name}`);
        await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(storageRef);

        // Push title, content, and image URL to Realtime Database
        const database = getDatabase();
        const newBlogRef = push(rtdbRef(database, 'blogs'));
        set(newBlogRef, {
            title,
            content,
            imageUrl,
            timestamp: Date.now()
        });

        console.log('Title:', title);
        console.log('Content:', content);
        console.log('Image URL:', imageUrl);
    };

    const handleDelete = async (blogId) => {
        try {
            const database = getDatabase();
            const blogRef = rtdbRef(database, `blogs/${blogId}`);

            // Remove the blog post from the Realtime Database
            await remove(blogRef);

            // Update the 'blogs' state by filtering out the deleted blog
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== blogId));
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
            />
            <br />

            <ReactQuill
                value={content}
                onChange={setContent}
                modules={{
                    toolbar: [
                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['bold', 'italic', 'underline'],
                        ['link'],
                        [{ 'align': [] }],
                        ['clean']
                    ],
                }}
            />
            <br />

            <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02" accept="image/*" onChange={handleImageChange} />
                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
            </div>
            <button onClick={handleSubmit} className="btn btn-dark">Create Blog</button>

            <div className="blog-list mt-3">
                <h2>Blog List</h2>
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <img src={blog.imageUrl} width={110} />
                            <div>
                                <h4>{blog.title}</h4>
                                <p>{blog.content.substring(0, 100)}...</p>
                            </div>
                            <button onClick={() => handleDelete(blog.id)} className="btn btn-danger">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogForm;
