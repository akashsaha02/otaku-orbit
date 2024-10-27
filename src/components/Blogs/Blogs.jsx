import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = ({ searchTerm, handleBookmarks, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setBlogs(data);
                    setFilteredBlogs(data);
                } else {
                    console.error('Data format is not valid. Expected an array.');
                }
            })
            .catch(error => {
                console.error('Failed to fetch blogs:', error);
            });
    }, []);

    console.log(blogs); 
    useEffect(() => {
        // Filter blogs based on search term
        if (searchTerm) {
            const filtered = blogs.filter(blog =>
                blog.blog_title && blog.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBlogs(filtered);
        } else {
            setFilteredBlogs(blogs);
        }
    }, [searchTerm, blogs]);

    return (
        <div className="grid grid-cols-1 gap-6 p-4 border rounded-lg">
            {filteredBlogs.length > 0 ? (
                filteredBlogs.map(blog => (
                    <BlogCard
                        key={blog.id}
                        blog={blog}
                        handleBookmarks={handleBookmarks}
                        handleReadingTime={handleReadingTime}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500">No blogs found.</p>
            )}
        </div>
    );
}

export default Blogs;
