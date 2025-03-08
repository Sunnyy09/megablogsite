import React from "react";
import ShowCard from "../Card/ShowCards";

function RecentPosts() {
  return (
    <div className="bg-white h-full sm:w-[70vw] w-[90vw]">
      <div className="w-full py-8">
        <div className="my-6 w-full">
          <h1 className="text-2xl decoration-current font-semibold">
            Recent Posts
          </h1>
        </div>
        <div className="w-full">
          <ShowCard />
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
