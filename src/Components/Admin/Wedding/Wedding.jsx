import axios from "axios";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { server } from "../../../../Server";

const Wedding = () => {
  const [groom, setGroom] = useState("");
  const [bride, setBride] = useState("");
  const [quote, setQuote] = useState("");
  const [description, setDescription] = useState("");
  const [weddingAvatar, setWeddingAvatar] = useState([]);
  const [profileAvatar, setProfileAvatar] = useState(null);
  const [coverAvatar, setCoverAvatar] = useState(null);

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    setProfileAvatar(file);
  };

  const handleCoverChange = (event) => {
    setCoverAvatar(event.target.files[0]);
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const fileArr = Array.from(files);
    setWeddingAvatar((prev) => [...prev, ...fileArr]);
  };

  const handleDelete = (id) => {
    const updatedWeddingAvatar = [...weddingAvatar];
    updatedWeddingAvatar.splice(id, 1);
    setWeddingAvatar(updatedWeddingAvatar);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const newForm = new FormData();
    for (let i = 0; i < weddingAvatar.length; i++) {
      newForm.append("file", weddingAvatar[i]);
    }
    newForm.append("groom", groom);
    newForm.append("bride", bride);
    newForm.append("quote", quote);
    newForm.append("description", description);
    newForm.append("profile-avatar", profileAvatar);
    newForm.append("cover-avatar", coverAvatar);

    await axios
      .post(`${server}/create-wedding`, newForm, config)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-full w-full flex justify-center py-20">
      <form
        className="space-y-6 sm:mx-auto sm:w-full sm:max-w-md px-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Groom
          </label>
          <input
            className="bg-gray-100 outline-none px-4 py-1"
            type="text"
            onChange={(event) => setGroom(event.target.value)}
            name="groom"
            id="groom"
            value={groom}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Bride
          </label>
          <input
            className="bg-gray-100 outline-none px-4 py-1"
            type="text"
            onChange={(event) => setBride(event.target.value)}
            name="bride"
            id="bride"
            value={bride}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Quote
          </label>
          <input
            className="bg-gray-100 outline-none px-4 py-1"
            type="text"
            onChange={(event) => setQuote(event.target.value)}
            name="quote"
            id="quote"
            value={quote}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Description
          </label>
          <input
            className="bg-gray-100 outline-none px-4 py-1"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            name="description"
            id="description"
            value={description}
          />
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="mt-2 flex flex-col items-center ">
            <label
              className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              htmlFor="profile-avatar"
            >
              <span className="text-center">Upload Your Profile Photo</span>
              <input
                type="file"
                name="profile-avatar"
                id="profile-avatar"
                accept=".jpg,.jpeg,.heic,.png"
                onChange={handleProfileChange}
                className="sr-only"
                required
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {profileAvatar ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={URL.createObjectURL(profileAvatar)}
                  alt=""
                />
              ) : (
                <RxAvatar className="h-24 w-24 text-gray-300" />
              )}
            </div>
          </div>

          <div className="mt-2 flex flex-col items-center">
            <label
              className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 "
              htmlFor="cover-avatar"
            >
              <span className="text-center">Upload Your Cover Photo</span>
              <input
                type="file"
                name="cover-avatar"
                id="cover-avatar"
                accept=".jpg,.jpeg,.heic,.png"
                onChange={handleCoverChange}
                className="sr-only"
                required
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {coverAvatar ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={URL.createObjectURL(coverAvatar)}
                  alt=""
                />
              ) : (
                <RxAvatar className="h-24 w-24 text-gray-300" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center w-full">
          <label
            className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full"
            htmlFor="file-input"
          >
            <span>Upload Your Wedding photos</span>
            <input
              type="file"
              name="avatar"
              id="file-input"
              accept=".jpg,.jpeg,.heic,.png"
              onChange={handleFileInputChange}
              className="sr-only"
              multiple
              required
            />
          </label>
          <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
            {weddingAvatar.map((avatar, index) => (
              <div className="flex flex-col gap-2">
                <span
                  key={index}
                  className="inline-block h-24 w-24 overflow-hidden"
                >
                  <img
                    className="h-full w-full object-cover"
                    alt={`avatar-${index}`}
                    src={URL.createObjectURL(avatar)}
                  />
                </span>
                <button type="button" onClick={() => handleDelete(index)} className="bg-red-500 text-white">Delete</button>
              </div>
            ))}
            {weddingAvatar.length === 0 && (
              <RxAvatar className="h-24 w-24 text-gray-300" />
            )}
          </div>
        </div>
        <input
          type="submit"
          name=""
          id=""
          className="bg-blue-500 text-white w-full py-1 cursor-pointer hover:bg-blue-600 active:bg-blue-400"
        />
      </form>
    </div>
  );
};

export default Wedding;
