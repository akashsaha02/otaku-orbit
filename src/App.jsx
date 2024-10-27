import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleBookmarks = (blog) => {
    const isAlreadyBookmarked = bookmarks.some((bookmark) => bookmark.id === blog.id);
    if (isAlreadyBookmarked) {
      alert('Blog already bookmarked');
    } else {
      setBookmarks([...bookmarks, blog]);
    }
  };

  const handleReadingTime = (id, time) => {
    setReadingTime(readingTime + time);

    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(newBookmarks);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-12 gap-5 mt-8">
          <div className="col-span-12 md:col-span-8">
            <Blogs
              searchTerm={searchTerm}
              handleBookmarks={handleBookmarks}
              handleReadingTime={handleReadingTime}
            />
          </div>
          <div className="col-span-12 md:col-span-4 mt-5 md:mt-0">
            <Bookmarks
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
              readingTime={readingTime}
            />
          </div>
        </div>
      </div>
    </>
  );
}
