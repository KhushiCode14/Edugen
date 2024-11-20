const Choose = () => {
  return (
    <section className=" px-20 max-md:px-10 pt-7 flex justify-center items-center flex-col">
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="w-full flex flex-col gap-3 mb-10 ">
          <h3 className="text-orange-700 text-2xl ">course detail</h3>
          <h1 className="text-6xl font-bold">Explore Our Category</h1>
          <h5 className="text-1xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, odit?s
          </h5>
          <button
            type="button"
            className="bg-blue-700 text-white p-5 flex gap-2 justify-center items-center w-1/3"
          >
            All Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 ">
          <div className="flex flex-col gap-1 justify-center items-center h-full w-full ">
            <img src="/choose/2.jpg" alt="" className="w-80 h-40" />
            <h2>Business</h2>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center h-full">
            <img src="/choose/2.jpg" alt="" className="w-80 h-40" />
            <h2>English</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3">
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/2.jpg" alt="" className="w-80 h-40" />
          <h2>FInance</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400 ">
          <img src="/choose/3.jpg" alt="" className="w-80 h-40" />
          <h2>Development</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/4.jpg" alt="" className="w-80 h-40" />
          <h2>Content Creating</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/5.jpg" alt="" className="w-80 h-40" />
          <h2>Science and technology</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/6.jpg" alt="" className="w-80 h-40" />
          <h2>Art and Design</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/7.jpg" alt="" className="w-80 h-40" />
          <h2>Dance and Music</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/8.jpg" alt="" className="w-80 h-40" />
          <h2>Creative</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/9.jpg" alt="" className="w-80 h-40" />
          <h2>Business</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/10.png" alt="" className="w-80 h-40" />
          <h2>Business</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-slate-400">
          <img src="/choose/1.jpg" alt="" className="w-80 h-40" />
          <h2>Business</h2>
        </div>
      </div>
    </section>
  );
};

export default Choose;
