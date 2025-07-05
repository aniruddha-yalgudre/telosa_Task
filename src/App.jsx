import React, { useRef } from "react";
import Card from "./Components/card";
import SideBar from "./Components/SideBar";
import TopNavbar from "./Components/TopNavbar";
import Card2 from "./Components/Card2";

const App = () => {
  const containerRef = useRef(null);

  return (
    <>
      <div className="h-screen w-full bg-white overflow-hidden">
        <div className="w-full flex h-full">
          <SideBar />

          <div className="relative w-[94%] h-full flex flex-col">
            <section className="topNavbar h-16 w-full  flex-shrink-0">
              <TopNavbar />
            </section>

            <div className="w-full h-full  flex justify-between overflow-hidden  ">
              <section className="relative h-full w-1/3 bg-white-700 flex flex-col border-r-[1px] border-zinc-400 ">
                {/* search component / sort  */}
                <div className="h-[15vh] border-b-[1px] border-zinc-400 px-4 py-2 flex-shrink-0">
                  <h1 className="capitalize text-xl font-semibold">google</h1>

                  <div className="w-full flex justify-between mt-4">
                    <div className="flex justify-center items-center w-4/5 relative">
                      <i className="absolute left-3 z-10 ri-search-line text-xl text-zinc-700"></i>
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-100 border-none outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                      />
                    </div>

                    <button className="h-10 w-10 bg-zinc-100 rounded-full">
                      <i className="ri-sort-desc text-xl hover:text-blue-500"></i>
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto scroller">
                  <Card />
                </div>
              </section>

              {/*card component */}
              <section className="relative h-full w-2/3 border-b-[1px] border-zinc-400 flex flex-col">
                <div className="h-14 w-full flex justify-between bg-zinc-100 items-center px-4 border-b-[1px] border-zinc-400 flex-shrink-0">
                  <h5 className="text-xl font-medium">Review</h5>
                  <button className="relative h-fit w-fit flex justify-center items-center bg-zinc-400 rounded-full text-sm pr-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full overflow-hidden bg-red-300 border-zinc-400 border-[1px]">
                      <img
                        className="h-full w-full object-contain object-center"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                        alt="review"
                      />
                    </div>
                    Theressa Webb
                  </button>
                </div>

                <div className=" w-full overflow-y-auto scroller">
                  <Card2 />
                </div>

                <section className="bottom-0 w-full bg-white border-t-[1px] border-zinc-400 p-3 flex-shrink-0">
                  <div className="w-full flex items-center relative">
                    <input
                      type="text"
                      placeholder="Enter Your Reply Here..."
                      className="w-full pl-4 pr-20 py-3 rounded-full bg-zinc-100 border-none outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute right-3 flex items-center gap-1">
                      <button className="p-1 hover:text-blue-500 transition-colors">
                        <i className="ri-bard-line text-xl text-zinc-800"></i>
                      </button>
                      <button className="p-1 hover:text-blue-500 transition-colors">
                        <i className="ri-attachment-2 text-xl text-zinc-800"></i>
                      </button>
                      <button className="p-1 hover:text-blue-500 transition-colors">
                        <i className="ri-emotion-line text-xl text-zinc-800"></i>
                      </button>
                      <button className="p-1 hover:text-blue-500 transition-colors">
                        <span className=" inline-block h-4 w-0.5 mr-2 bg-zinc-400">
                        </span>
                        <i className="ri-send-plane-2-line text-xl text-zinc-500"></i>
                      </button>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
