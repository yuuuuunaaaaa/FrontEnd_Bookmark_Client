import React from 'react';
import { BookmarksResponse } from '@/types';
import Bookmark from './Bookmark';

type Props = {
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarker</h1>
            {
            bookmarks.data.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            }            
        </div>
    );
};

export default Bookmarks;