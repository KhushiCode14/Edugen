const Home = () => {
  return (
    <section className="px-20 max-md:px-10 pt-7 flex gap-5 justify-between text-xl items-center max-md:flex-col max-md:w-full">
      <div className="z-10 flex flex-col w-1/2 max-md:w-full justify-start">
        <h3>this is innovative page</h3>

        <h1 className="text-7xl font-bold py-5">
          THE BEST PLATFORM ENROLL IN YOUR SPECIAL COURSE
        </h1>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non cumque
          ex numquam autem, nemo voluptas?
        </h3>

        <div className="flex gap-8 py-8 ">
          <button
            type="button"
            className="bg-blue-700 text-white p-5 flex gap-2 justify-center items-center"
          >
            GET STARTED
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
          <button type="button" className="outline p-4 outline-blue-700">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-1/2 z-10 max-md:w-full">
        <img src="/homeImage.png" alt="" className="max-w-full h-full" />
      </div>
    </section>
  );
};

export default Home;
