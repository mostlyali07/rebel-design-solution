import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as rtdbRef, push, remove, set, onValue } from 'firebase/database';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import swal from 'sweetalert';

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
            swal('Error', 'Please select an image of size up to 1MB.', 'error');
        }
    };

    const handleSubmit = async () => {
        if (!title.trim() && !content.trim() && !image) {
            swal('Error', 'Please fill in at least one field before submitting.', 'error');
            return;
        }
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

        // Clear fields after successful submission
        setTitle('');
        setContent('');
        setImage(null);
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

    const convertHtmlToPlainText = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.body.textContent || "";
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
                <h2 className="text-center fw-bold text-uppercase">All Blogs</h2>
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <img src={blog.imageUrl} />
                            <div>
                                <h4>{blog.title}</h4>
                                {/* <p>{blog.content.substring(0, 100)}...</p> */}
                                <p>{convertHtmlToPlainText(blog.content.substring(0, 300))}...</p>
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
