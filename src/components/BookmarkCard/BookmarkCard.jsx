import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImCross } from "react-icons/im";

const BookmarkCard = ({ bookmarks, setBookmarks }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('title');

    const removeBookmark = (bookmarkId) => {
        const newBookmarks = bookmarks.filter(item => item.id !== bookmarkId);
        setBookmarks(newBookmarks);
    };

    const filteredBookmarks = bookmarks
        .filter(bookmark => 
            bookmark.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => 
            sortBy === 'title' 
                ? a.blog_title.localeCompare(b.blog_title) 
                : b.date - a.date
        );

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Bookmark Blogs ({filteredBookmarks.length})</h2>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search bookmarks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Sort Options */}
            <div className="flex items-center justify-between mb-4">
                <label className="font-medium">Sort by:</label>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="title">Title</option>
                    <option value="date">Date</option>
                </select>
            </div>

            {/* Bookmark List */}
            <div className="space-y-4">
                {filteredBookmarks.length > 0 ? (
                    filteredBookmarks.map((bookmark) => (
                        <div key={bookmark.id} className="bg-white flex justify-between border p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div>
                                <p className="font-medium text-gray-800">{bookmark.blog_title}</p>
                                {bookmark.date && (
                                    <p className="text-sm text-gray-500">Added on: {new Date(bookmark.date).toLocaleDateString()}</p>
                                )}
                            </div>
                            <button
                                onClick={() => removeBookmark(bookmark.id)}
                                className="text-red-500 hover:text-red-700 transition-colors duration-200">
                                <ImCross />
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No bookmarks found.</p>
                )}
            </div>
        </div>
    );
};

BookmarkCard.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        blog_title: PropTypes.string.isRequired,
        date: PropTypes.string, // Optional date field for sorting
    })).isRequired,
    setBookmarks: PropTypes.func.isRequired,
};

export default BookmarkCard;
