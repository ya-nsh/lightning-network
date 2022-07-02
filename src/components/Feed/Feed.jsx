import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './inputOptions/InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post/Post';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="flex-[0.6] mt-10 ml-2">
      <div className="feed__inputContainer bg-white p-3 rounded-xl mb-5 pb-5">
        <div className="feed__input border-2 border-solid border-gray-200 rounded-xl flex items-center justify-center">
          <CreateIcon className="ml-3" />
          <form className="flex w-full">
            <input
              type="text"
              placeholder="What's happening?"
              className="border-none flex-1 ml-4 font-bold"
            />
            <button type="submit" className="hidden" onClick={handleSubmit}>
              Post
            </button>
          </form>
        </div>
        <div className="feed__inputOptions flex justify-evenly">
          <InputOptions title="Photo" Icon={ImageIcon} color="#79b7fb" />
          <InputOptions
            title="Video"
            Icon={SubscriptionsIcon}
            color="#5f9b41"
          />
          <InputOptions title="Event" Icon={EventNoteIcon} color="#c37d16" />
          <InputOptions
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="#e16745"
          />
        </div>
      </div>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
      <Post name="Jon Doe" description="first" message="hello world" />
    </div>
  );
}
