import axios from "axios";
import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { server } from "../../../../Server";
import { toast } from "react-toastify";

const AddHero = () => {
  const [heroAvatar, setHeroAvatar] = useState([]);
  const [fileSelected, setFileSelected] = useState(false);

  const handleHeroAvatar = (event) => {
    const file = event.target.files;
    const fileArr = Array.from(file);
    if (fileArr.length >= 8) {
      toast.error("You can upload a maximum of 10 photos.");
      return;
    }
    setHeroAvatar((prev) => [...prev, ...fileArr]);
    setFileSelected(true);
  };

  const handleDelete = (index) => {
    const updatedHeroAvatar = heroAvatar.filter((_, id) => id !== index);
    setHeroAvatar(updatedHeroAvatar);
    setFileSelected(updatedHeroAvatar.length > 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fileSelected) {
      alert("Please select at least one file.");
      return;
    }

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const newForm = new FormData();
    for (let i = 0; i < heroAvatar.length; i++) {
      newForm.append("hero-avatar", heroAvatar[i]);
    }

    await axios
      .post(`${server}/create-slide`, newForm, config)
      .then((res) => {
        toast.success("Uploaded Successfully!!");
        setHeroAvatar("");
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="flex justify-center h-screen items-center ">
      <form
        className="space-y-6 w-[80%] sm:w-[50%] flex flex-col items-center bg-gray-100 py-4 sm:py-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center w-[80%] items-center ">
          <div className=" text-lg font-medium py-4">
            <h1 className="text-4xl text-center">Add Home Section Photos</h1>
          </div>
          <label
            htmlFor="hero-avatar"
            className="flex flex-col justify-center h-full items-center"
          >
            <div className="py-6">
              <span className="bg-green-500 w-full text-white px-4 py-2 cursor-pointer ">
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
                required
              />
            </div>
          </label>

          <div className="flex  justify-center">
            {heroAvatar.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4 gap-x-6">
                {heroAvatar.map((heroImg, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <img
                      className="w-32 h-40"
                      src={URL.createObjectURL(heroImg)}
                      alt={index}
                    />
                    <button
                      className="bg-red-500 text-white"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <MdAddToPhotos
                size={100}
                className=" cursor-pointer text-gray-500"
              />
            )}
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

export default AddHero;
