import PropTypes from 'prop-types';
import BookmarkCard from "../BookmarkCard/BookmarkCard";

const Bookmarks = ({ bookmarks, setBookmarks, readingTime }) => {

    return (
        <div className='space-y-4'>
            <div className='bg-[#6047EC1A] p-4 rounded-lg border-indigo-300 border-2'>
                <h2 className="text-lg md:text-xl font-semibold text-[#6047EC]">Reading Time: {readingTime}</h2>
            </div>

           <div  className="border border-e border-[#6047EC] rounded-lg"> <BookmarkCard bookmarks={bookmarks} setBookmarks={setBookmarks}/></div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    setBookmarks: PropTypes.func.isRequired,
    readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;