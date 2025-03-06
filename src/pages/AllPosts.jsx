import React, { useState, useEffect } from "react";
import dbService from "../appwrite/databaseConf";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="w-full grid sm:w-full lg:grid-cols-3 md:grid-cols-2 gap-4 px-1">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="min-h-96 border border-gray-200 shadow-sm"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
