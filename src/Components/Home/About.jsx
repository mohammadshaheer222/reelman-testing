import parallax from "/src/assets/images/paral2.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg";

const About = () => {
  return (
    // <div className="flex flex-col justify-center items-center lg:flex-row">
    //   <div className="px-8 py-4 flex flex-col items-center justify-center lg:flex-row lg:items-end lg:py-0 lg:px-0 lg:pl-8  w-full md:max-w-3xl lg:max-w-none">
    //     <div className="space-y-2 md:px-4 lg:pr-8 lg:pb-16 lg:w-[50%] ">
    //       <h1 className="heading">Reelman Productions</h1>
    //       <div className="font-spaceMono text-pretty">
    //         <p>
    //           We try to tell each story in a simple,natural and elegant
    //           way,without artifacts and excessive modifications,as we percieve
    //           and live it. We love to think that our story will be a memory
    //           forever in someone's life.
    //         </p>
    //         <p>
    //           We simply let ourselves be carried away by natural emotions and by
    //           the day without it or by the course of events.
    //         </p>
    //         <p>
    //           We love to think that our story will be a memory forever in
    //           someone's life.
    //         </p>
    //       </div>
    //       <div className="hidden lg:flex gap-x-4 border-b border-b-gray-300 pt-6 p-2 font-semibold font-spaceMono ">
    //         <h1 className="cursor-pointer">Contact</h1>
    //         <h1 className="cursor-pointer">Instagram</h1>
    //       </div>
    //     </div>
    //     <div className="pt-4 lg:w-[50%]">
    //       <img
    //         className="object-cover lg:w-full lg:h-screen"
    //         src="https://ashleighhaase.com/wp-content/uploads/sites/12921/2021/09/CLAIREDAVIE_CCW-418_websize-683x1024.jpg"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="px-6 h-full space-y-6 py-4 ">
      <div className="text-4xl md:relative md:text-6xl md:flex md:justify-center">
        <h1 className="md:absolute md:top-16 md:z-30 md:mix-blend-overlay">
          A Modern Approach <br /> to an Age Old Tradition
        </h1>
      </div>
      <div className="md:flex md:justify-center md:items-center">
        <div className="flex relative gap-x-2">
          <div className="md:pt-64">
            <img
              src={parallax}
              className="about-img1 w-32 h-40 object-cover object-center  md:w-80 lg:w-full md:h-96"
              alt=""
            />
          </div>
          <div className="hidden md:block md:max-w-sm md:pt-52 md:text-balance md:text-lg">
            <p>
              Considered to be the epitome of Modern Photography and Filmmaking,
              HOTC has transformed the Indian Wedding landscape on a regular
              basis. For almost a decade House On The Clouds has been creating
              photographs and films which are timeless and have been etched in
              memories of thousands of people forever.
            </p>
            <p>
              Awarded as the Wedding Filmmaker of the year for four consecutive
              years at the Weddingsutra awards along with numerous other awards
              HOTC is the only company listed on IMDB for its award winning
              films.
            </p>
          </div>
          <div className="absolute right-0 top-14 md:static ">
            <img
              src={image3}
              className="about-img2 w-32 h-40 object-cover object- object-center md:w-80 lg:w-full md:h-96"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pt-14 block md:hidden">
        <p>
          Considered to be the epitome of Modern Photography and Filmmaking,
          HOTC has transformed the Indian Wedding landscape on a regular basis.
          For almost a decade House On The Clouds has been creating photographs
          and films which are timeless and have been etched in memories of
          thousands of people forever.
        </p>
        <p>
          Awarded as the Wedding Filmmaker of the year for four consecutive
          years at the Weddingsutra awards along with numerous other awards HOTC
          is the only company listed on IMDB for its award winning films.
        </p>
      </div>
    </div>
  );
};
export default About;
