import React from "react";
import dbService from "../appwrite/databaseConf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="no-underline">
      <div className="w-full">
        <div className="w-full justify-center mb-4">
          <img
            src={dbService.getFilePreview(featuredImage)}
            alt={title}
            className=""
          />
        </div>
        <div className="p-4 text-left">
          <h2 className="font-bold text-2xl text-[#364037] leading-snug">
            {title}
          </h2>
          <hr className="bg-gray-300 border-0 h-px my-4" />
          <p className="text-gray-700">Its my first post</p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
