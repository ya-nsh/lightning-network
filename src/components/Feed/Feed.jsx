import React, { useState, useEffect } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './inputOptions/InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post/Post';
import { db } from '../../firebase/firebase';
import firebase from 'firebase';

export default function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      );
  });

  const handleSubmit = e => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'bruh',
      description: 'described',
      message: input,
      photoUrl: 'https://i.pravatar.cc/300',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
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
              value={input}
              onChange={e => setInput(e.target.value)}
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}
