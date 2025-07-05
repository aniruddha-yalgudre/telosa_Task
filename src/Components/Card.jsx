import React, { useRef } from "react";

const Card = () => {
  const dataRef = useRef([
    {
      id: 1,
      title: "Introduction to React",
      desc: "Learn the basics of React and how to build a simple application.",
      author: "Theresa Webb",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      date: "Jun 20, 2025",
      replies: 1
    },
    {
      id: 2,
      title: "Advanced React Concepts",
      desc: "Explore advanced topics in React such as hooks, context, and optimization. its gives the functinality to reuse the components.",
      author: "John Smith",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      date: "Jun 18, 2025",
      replies: 3
    },
    {
      id: 3,
      title: "React Best Practices",
      desc: "Discover best practices for writing clean, efficient, and scalable React code.",

      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 3,
      date: "Jun 15, 2025",
      replies: 0
    },
    {
      id: 4,
      title: "React Performance Optimization",
      desc: "Learn techniques to optimize React applications for better performance and user experience.",

      author: "Mike Davis",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      date: "Jun 12, 2025",
      replies: 2
    },
    {
      id: 5,
      title: "React Testing Strategies",
      desc: "Comprehensive guide to testing React components and applications effectively.",

      author: "Emily Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      date: "Jun 10, 2025",
      replies: 1
    },
    {
      id: 6,
      title: "React State Management",
      desc: "Understanding different state management solutions in React applications.",
      author: "David Brown",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      date: "Jun 8, 2025",
      replies: 4
    }
  ]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="ri-star-fill text-yellow-400 text-base"></i>);
      } else {
        stars.push(<i key={i} className="ri-star-line text-gray-300 text-base"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="space-y-0  h-full overflow-y-scroll scroller">
      {dataRef.current.map((item) => (
        <div key={item.id} className="max-w-2xl mx-auto py-3 px-4 bg-white border-b-[1px] border-zinc-400">
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border-zinc-400 border-[1px]">
              <img 
                className="h-full w-full object-contain object-center" 
                src={item.avatar} 
                alt={item.author} 
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <div className="flex flex-col items-start">
                  <h3 className="font-medium text-gray-900">{item.author}</h3>
                  {/* Star rating */}
                  <div className="flex items-center gap-0.5">
                    {renderStars(item.rating)}
                  </div>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap tracking-tight">
                  <i className="ri-flag-fill text-red-500 text-base mr-2"></i>
                  On {item.date}
                </span>
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-1">
                {item.desc}
              </p>

              {/* Reply link */}
              <button className="flex items-center gap-1 text-blue-600 text-sm hover:text-blue-700 transition-colors">
                <i className="ri-message-2-line text-base mr-1"></i>
                <span>{item.replies} {item.replies === 1 ? 'reply' : 'replies'}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;