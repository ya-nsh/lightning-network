import React from 'react';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOptions from '../inputOptions/InputOptions';

function Post({ name, description, message, photoUrl, date }) {
  return (
    <div className="post bg-white mb-3 rounded-xl p-4">
      <div className="post__header flex mb-3 items-center gap-2">
        <Avatar src={photoUrl} />
        <div className="post__headerInfo">
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="text-gray-500">{description}</p>
          <div className="post__headerInfo__date">
            <p>{date}</p>
          </div>
        </div>
      </div>

      <div className="post__body mb-4">
        <p className="text-md">{message}</p>
      </div>
      <hr />
      <div className="post__buttons flex justify-evenly">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
