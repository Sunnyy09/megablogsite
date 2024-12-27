import React from "react";
import Card from "./HomeCard";

const cardData = [
  {
    src: "https://images.pexels.com/photos/5779600/pexels-photo-5779600.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "A Serene Escape",
    content:
      "Discover tranquility in the embrace of nature, where every sunrise feels like a warm hug.",
  },
  {
    src: "https://images.pexels.com/photos/2378278/pexels-photo-2378278.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Urban Oasis",
    content:
      "Explore the perfect blend of city vibes and natural beauty in a single captivating frame.",
  },
  {
    src: "https://images.pexels.com/photos/5560617/pexels-photo-5560617.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Golden Hour Glow",
    content:
      "Bask in the golden hues of the setting sun as the world around you becomes a masterpiece.",
  },
  {
    src: "https://images.pexels.com/photos/29876547/pexels-photo-29876547/free-photo-of-winter-reflection-in-boston-public-park.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Winter Reflections",
    content:
      "A mesmerizing mirror of snow-laden trees, capturing the peaceful essence of wintertime.",
  },
  {
    src: "https://images.pexels.com/photos/14013483/pexels-photo-14013483.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Whimsical Wonderland",
    content:
      "Step into a dreamy world where vibrant colors and nature’s harmony come alive.",
  },
  {
    src: "https://images.pexels.com/photos/9260822/pexels-photo-9260822.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coastal Calm",
    content:
      "Feel the cool ocean breeze and the soothing rhythm of waves in this coastal paradise.",
  },
];

function ShowCard() {
  return (
    <div className="w-full">
      <ul className="w-full grid sm:w-full lg:grid-cols-3 md:grid-cols-2 gap-4 px-1">
        {cardData.map((card) => (
          <li className="min-h-96 border border-gray-200 shadow-sm">
            <Card src={card.src} title={card.title} content={card.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowCard;
