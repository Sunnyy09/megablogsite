import React, { useState, useEffect } from "react";
import dbService from "../appwrite/databaseConf";
// import { Container, PostCard } from "../components";
import Main from "../components/Home/Main";
import RecentPosts from "../components/Home/RecentPosts/RecentPosts";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dbService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // if (posts.length === 0) {
  /*{
     <h1 className="text-2xl font-bold hover:text-gray-500">
                No Posts Found |{" "}
                <span className="text-red-500 hover:text-red-700">
                  Login to read posts
                </span>
              </h1> 
  }*/

  return (
    // lg:min-h-[300vh] md:min-h-[430vh] sm:min-h-[720vh]
    <div className="w-full min-h-[200vh] bg-white">
      <div className="flex flex-wrap ">
        <div className="w-full">
          <Main />
        </div>
        <div className="w-full flex justify-center lg:mt-44 mt-[250px]">
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}

// return (
//   <div className="w-full py-8">
//     <Container>
//       <div className="flex flex-wrap">
//         {posts.map((post) => (
//           <div key={post.$id} className="p-2 w-1/4">
//             <PostCard {...post} />
//             {/* post={post} use spread instead of this */}
//           </div>
//         ))}
//       </div>
//     </Container>
//   </div>
// );
// }

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

export default Home;
