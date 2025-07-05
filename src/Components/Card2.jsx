import React, { useRef } from "react";

const Card2 = () => {
  const dataRef = useRef([
    {
      id: 1,
      title: "Introduction to React",
      desc: "Learn the basics of React and how to build a simple application.",
      author: "Theresa Webb",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      date: "Jun 20, 2025",
      replies: 1,
    },
    {
      id: 2,
      title: "Advanced React Concepts",
      desc: "Explore advanced topics in React such as hooks, context, and optimization. its gives the functinality to reuse the components.",
      author: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      date: "Jun 18, 2025",
      replies: 3,
    },
    {
      id: 3,
      title: "React Best Practices",
      desc: "Discover best practices for writing clean, efficient, and scalable React code.",
      author: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 3,
      date: "Jun 15, 2025",
      replies: 0,
    },
    {
      id: 4,
      title: "React Performance Optimization",
      desc: "Learn techniques to optimize React applications for better performance and user experience.",
      author: "Mike Davis",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      date: "Jun 12, 2025",
      replies: 2,
    },
    {
      id: 5,
      title: "React Testing Strategies",
      desc: "Comprehensive guide to testing React components and applications effectively.",
      author: "Emily Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      date: "Jun 10, 2025",
      replies: 1,
    },
    {
      id: 6,
      title: "React State Management",
      desc: "Understanding different state management solutions in React applications.",
      author: "David Brown",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      date: "Jun 8, 2025",
      replies: 4,
    },
  ]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <i key={i} className="ri-star-fill w-5 h-5 text-yellow-400"></i>
        );
      } else {
        stars.push(
          <i key={i} className="ri-star-line w-5 h-5 text-gray-300"></i>
        );
      }
    }
    return stars;
  };

  return (
    <div className="space-y-0 overflow-y-auto px-3 scroller">
      {dataRef.current.map((item) => (
        <div
          key={item.id}
          className="w-full mx-auto py-6 px-6 bg-white border-b-[1px] border-zinc-400"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border-zinc-400 border-[1px]">
              <img
                className="h-full w-full object-contain object-center"
                src={item.avatar}
                alt={item.author}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-gray-900">{item.author}</h3>
                <i className="ri-flag-fill w-4 h-4 text-red-500"></i>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                Posted on: {item.date}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-0.5">
                  {renderStars(item.rating)}
                </div>
                <span className="text-base font-medium text-gray-900 border-l-[1px]  border-zinc-400 px-2 ">
                  {item.rating}.0
                </span>
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Action buttons */}
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 text-gray-500 hover:text-gray-700 rounded-full border-[1px] border-zinc-400 transition-colors flex items-center justify-center">
                  <i className="ri-heart-line text-base"></i>
                </button>
                <button className="w-8 h-8 text-gray-500 hover:text-gray-700 rounded-full border-[1px] border-zinc-400 transition-colors flex items-center justify-center">
                  <i className="ri-repeat-line text-base"></i>
                </button>
                <button className="w-8 h-8 text-gray-500 hover:text-gray-700 rounded-full border-[1px] border-zinc-400 transition-colors flex items-center justify-center">
                  <i className="ri-share-line text-base"></i>
                </button>
                <button className="w-8 h-8 text-gray-500 hover:text-gray-700 rounded-full border-[1px] border-zinc-400 transition-colors flex items-center justify-center">
                  <i className="ri-bookmark-line text-base"></i>
                </button>
                <button className="flex items-center gap-1 text-blue-600 text-sm hover:text-blue-700 transition-colors ml-2">
                  <i className="ri-message-2-line text-base"></i>
                  <span>
                    {item.replies} {item.replies === 1 ? "reply" : "replies"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;
