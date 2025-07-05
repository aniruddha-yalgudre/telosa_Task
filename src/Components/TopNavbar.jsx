import React from "react";

const TopNavbar = () => {
  return (
    <div className=" w-full h-full  text-zinc-700 font-medium text-base border-b-[1px] border-zinc-500 ">
      <div className=" h-full w-full flex justify-between items-center px-4">
        <div className="search-part flex justify-start items-center gap-4">
          <i className="ri ri-box-line  text-xl"></i>
          <h5 className=" text-zinc-400 ">Unified Inbox / <span className=" inline-block  text-zinc-700 "> Inbox </span> </h5>
        </div>

        <div className="user-part flex justify-start items-center gap-4 ">
          <div className="user-profile-settings flex justify-start items-center gap-2">
              <button className=" aiButton px-3 py-1 bg-white rounded-full text-zinc-700 flex justify-center items-center gap-1 relative">
                 <span>
                 <i className="ri-bard-line text-xl bg-gradient-to-r from-pink-500 to-blue-700 bg-clip-text text-transparent"></i>
                 </span>
                 <h5 className="font-semibold">
                  Telosa AI
                 </h5>
              </button>
            <span className=" flex items-center justify-center h-8 w-8 rounded-full ">
              <i className="ri-notification-2-line text-xl  text-zinc-700  "></i>
            </span>
          </div>

          <div className="user-dropdown flex justify-start items-center gap-2">
            <div className="relative h-10 w-10  rounded-full overflow-hidden ">
              <img
                className="h-full w-full object-left object-cover"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="logo"
              />
            </div>
            {/* <i className="ri ri-arrow-down-s-line "></i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
