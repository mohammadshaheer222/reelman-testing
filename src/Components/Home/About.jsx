const About = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row">
      <div className="px-8 py-4 flex flex-col items-center justify-center lg:flex-row lg:items-end lg:py-0 lg:px-0 lg:pl-8  w-full md:max-w-3xl lg:max-w-none">
        <div className="space-y-2 md:px-4 lg:pr-8 lg:pb-16 lg:w-[50%] ">
          <h1 className="heading">Reelman Productions</h1>
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
          <div className="hidden lg:flex gap-x-4 border-b border-b-gray-300 pt-6 p-2 font-semibold font-spaceMono ">
            <h1 className="cursor-pointer">Contact</h1>
            <h1 className="cursor-pointer">Instagram</h1>
          </div>
        </div>
        <div className="pt-4 lg:w-[50%]">
          <img
            className="object-cover lg:w-full lg:h-screen"
            src="https://ashleighhaase.com/wp-content/uploads/sites/12921/2021/09/CLAIREDAVIE_CCW-418_websize-683x1024.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default About;
