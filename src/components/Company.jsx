const Company = () => {
  return (
    <section className="px-20 py-24 max-md:px-10  font-bold gap-6 flex flex-col justify-center text-xl items-center  ">
      <div className="">
        <h1 className="text-4xl font-bold ">Trusted by 4000+ companies</h1>
      </div>
      <div className="flex gap-5 justify-around items-centers w-full max-md:flex-col">
        <div className="flex gap-2 bg-red-50 rounded-md p-2  justify-center items-center w-1/5 max-md:w-full">
          <img src="/book-stack.png" alt="" className="w-[60px]" />
          <h3>LUCA</h3>
        </div>
        <div className="flex  gap-2  bg-red-50 rounded-md p-2 justify-center items-center  w-1/5 max-md:w-full">
          <img src="/notebook.png" alt="" className="w-[60px]" />
          <h3>EduCo</h3>
        </div>
        <div className="flex  gap-2 bg-red-50 rounded-md p-2 justify-center items-center w-1/5 max-md:w-full">
          <img src="/graduation.png" alt="" className="w-[60px]" />
          <h3>MISSION </h3>
        </div>
        <div className="flex  gap-2  bg-red-50 rounded-md p-2 justify-center items-center border-red-600 outline-2 w-1/5 max-md:w-full">
          <img src="/graduation-cap.png" alt="" className="w-[60px]" />
          <h3>EDULOVE</h3>
        </div>
        <div className="flex   gap-2  bg-red-50 rounded-md p-5 PX-6 justify-center items-center border-red-600 outline-2 w-1/5 max-md:w-full">
          <img src="/test.png" alt="" className="w-[60px]" />
          <h3>JONEDU</h3>
        </div>
      </div>
    </section>
  );
};

export default Company;
