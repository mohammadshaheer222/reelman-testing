const About = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="px-8 py-4 flex flex-col items-center justify-center md:flex-row md:items-end md:py-0 md:px-0 md:pl-8  w-full ">
        <div className="space-y-2 md:pr-8 md:pb-16 md:w-[60%] ">
          <h1 className="heading">
            Reelman Productions
          </h1>
          <div className="font-spaceMono text-pretty">
            <p>
              We try to tell each story in a simple,natural and elegant
              way,without artifacts and excessive modifications,as we percieve
              and live it. We love to think that our story will be a memory
              forever in someone's life.
            </p>
            <p>
              We simply let ourselves be carried away by natural emotions and by
              the day without it or by the course of events.
            </p>
            <p>
              We love to think that our story will be a memory forever in
              someone's life.
            </p>
          </div>
          <div className="hidden md:flex gap-x-4 border-b border-b-gray-300 pt-6 p-2 font-semibold font-spaceMono ">
            <h1 className="cursor-pointer">Contact</h1>
            <h1 className="cursor-pointer">Instagram</h1>
          </div>
        </div>
        <div className="pt-4 md:w-[40%]">
          <img
            className="object-cover  md:w-full md:h-screen"
            src="https://ashleighhaase.com/wp-content/uploads/sites/12921/2021/09/CLAIREDAVIE_CCW-418_websize-683x1024.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default About;
