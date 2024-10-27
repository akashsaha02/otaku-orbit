import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const BlogCard = ({ blog, handleBookmarks, handleReadingTime }) => {
    const { id, cover_img, author, author_img, posted_date, reading_time, blog_title, hashtags, content } = blog;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-48 object-cover" src={cover_img} alt={blog_title} />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{blog_title}</h2>

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <img className="w-10 h-10 rounded-full" src={author_img} alt={author} />
                            <div>
                                <p className="text-sm font-medium text-gray-700">{author}</p>
                                <p className="text-xs text-gray-500">{posted_date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <p className="text-sm text-gray-500">{reading_time} min read</p>
                            <button
                                onClick={() => handleBookmarks(blog)}
                                className="text-green-600 hover:text-black transition-colors duration-200">
                                <FaBookmark size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {hashtags.map((tag, index) => (
                            <span key={index} className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2">
                        <button
                            onClick={() => handleReadingTime(id, reading_time)}
                            className="flex-1 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200">
                            Mark as read
                        </button>
                        <button
                            onClick={toggleModal}
                            className="flex-1 text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200">
                            Read Blog
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-5">
                    <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
                        <button
                            onClick={toggleModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl">
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">{blog_title}</h2>
                        <p className="text-gray-700 mb-6">{content}</p>
                        <div className="flex flex-wrap gap-2">
                            {hashtags.map((tag, index) => (
                                <span key={index} className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover_img: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        blog_title: PropTypes.string.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
        content: PropTypes.string.isRequired, // Added content prop type
    }).isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
};

export default BlogCard;
