import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

const AddSlide = () => {
  const [heroAvatar, setHeroAvatar] = useState(null);
  const [midAvatar, setMidAvatar] = useState(null);

  const handleHeroAvatar = (event) => {
    const file = event.target.files;
    setHeroAvatar(Array.from(file));
  };

  const handleMidAvatar = (event) => {
    const file = event.target.files;
    setMidAvatar(Array.from(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit")
  };

  return (
    <div className="flex justify-center mt-16">
      <form
        className="space-y-6 w-[80%] sm:w-[50%]  h-full flex flex-col items-center bg-gray-200 py-4 sm:py-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="text-cente text-lg font-medium py-4">
            <h1>Add Hero Photos</h1>
          </div>
          <div>
            <label
              htmlFor="hero-avatar"
              className="flex flex-col justify-center h-full items-center"
            >
              <div>
                {heroAvatar ? (
                  <div className="flex gap-x-6 overflow-x-auto">
                    {heroAvatar.map((heroImg, index) => (
                      <img
                        className="w-28"
                        src={URL.createObjectURL(heroImg)}
                        alt={index}
                      />
                    ))}
                  </div>
                ) : (
                  <MdAddToPhotos
                    size={100}
                    className=" cursor-pointer text-gray-500"
                  />
                )}
              </div>
              <div className="py-6">
                <span className="bg-red-500 w-full text-white px-4 py-2 cursor-pointer ">
                  Browse Your Photos
                </span>
                <input
                  className="sr-only"
                  type="file"
                  name="hero-avatar"
                  id="hero-avatar"
                  accept=".jpg,.jpeg,.heic,.png,.mp4"
                  onChange={handleHeroAvatar}
                  multiple
                />
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center   w-[80%] h-1/2">
          <div className="text-cente text-lg font-medium py-4">
            <h1>Add Mid-Section Photos</h1>
          </div>
          <div>
            <label
              htmlFor="mid-avatar"
              className="flex flex-col justify-center h-full items-center"
            >
              <div>
                {midAvatar ? (
                  <div className="flex gap-x-6 overflow-x-auto">
                    {midAvatar.map((midImg, index) => (
                      <img
                        className="w-28"
                        src={URL.createObjectURL(midImg)}
                        alt={index}
                      />
                    ))}
                  </div>
                ) : (
                  <MdAddToPhotos
                    size={100}
                    className=" cursor-pointer text-gray-500"
                  />
                )}
              </div>
              <div className="py-6">
                <span className="bg-red-500 w-full text-white px-4 py-2 cursor-pointer ">
                  Browse Your Photos
                </span>
                <input
                  className="sr-only"
                  type="file"
                  name="mid-avatar"
                  id="mid-avatar"
                  accept=".jpg,.jpeg,.heic,.png,.mp4"
                  onChange={handleMidAvatar}
                  multiple
                />
              </div>
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Submit"
          className="w-[50%] bg-blue-500 text-white py-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddSlide;
