import React, { useState, useEffect } from "react";
import dbService from "../appwrite/databaseConf";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dbService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No Posts Found |{" "}
                <span className="text-red-500 hover:text-red-700">
                  Login to read posts
                </span>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
              {/* post={post} use spread instead of this */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

// {posts ? (
//   posts.map((post) => (
//     <div key={post.$id} className="p-2 w-1/4">
//       <PostCard {...post} />
//     </div>
//   ))
// ) : (
//   <h1 className="text-2xl font-bold hover:text-gray-500">
//     No Posts Found
//   </h1>
// )}
