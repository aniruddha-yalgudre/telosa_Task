import React from "react";

const SideLink = ({ l_icon }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center p-2 w-full transition-colors rounded-md cursor-pointer hover:bg-zinc-300 hover:rounded-full hover:text-blue-500">
        <i className={`ri ri-${l_icon}-line text-xl`}></i>
      </div>
    </div>
  );
};

const SideBar = () => {
  const links = [
    { l_icon: 'dashboard' },
    { l_icon: 'team' },
    { l_icon: 'inbox' },
    { l_icon: 'star' },
  ];

  return (
    <div className="h-screen w-[6%] flex flex-col items-center border-r-[1px] border-zinc-500 bg-white">
      <div className="relative h-10 w-10 bg-white rounded-lg mt-3 mb-16">
        <img
          className="h-full w-full object-left object-cover"
          src="https://telosa.cx/wp-content/uploads/2021/08/logo1.png"
          alt="logo"
        />
      </div>
      
      <div className="links-container flex flex-col items-center gap-2 capitalize overflow-y-auto side-scroller">
        {links.map((link, index) => (
          <SideLink key={index} l_icon={link.l_icon} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
