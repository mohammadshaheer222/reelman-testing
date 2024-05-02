import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../../../Server";
import { RxAvatar } from "react-icons/rx";

const EditProduct = () => {
  const { id } = useParams();
  const [groom, setGroom] = useState("");
  const [bride, setBride] = useState("");
  const [quote, setQuote] = useState("");
  const [description, setDescription] = useState("");
  const [profileAvatar, setProfileAvatar] = useState(null);
  const [coverAvatar, setCoverAvatar] = useState(null);
  const [weddingAvatar, setWeddingAvatar] = useState([]);

  const fetchSingleData = async () => {
    await axios
      .get(`${server}/single-wedding/${id}`)
      .then((res) => {
        setGroom(res.data.wedding.groom);
        setBride(res.data.wedding.bride);
        setQuote(res.data.wedding.quote);
        setDescription(res.data.wedding.description);
        setWeddingAvatar(res.data.wedding.weddingAvatar);
        setProfileAvatar(res.data.wedding.profile);
        setCoverAvatar(res.data.wedding.cover);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchSingleData();
  }, []);

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    setProfileAvatar(file);
  };

  const handleCoverChange = (event) => {
    const file = event.target.files[0];
    setCoverAvatar(file);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files;
    const fileArr = Array.from(file);
    // if (fileArr.length >= 10) {
    //   toast.error("You can upload a maximum of 10 photos.");
    //   return;
    // }
    setWeddingAvatar((prev) => [...prev, ...fileArr]);
  };

  const handleDelete = (id) => {
    const updatedWeddingAvatar = [...weddingAvatar];
    updatedWeddingAvatar.splice(id, 1);
    setWeddingAvatar(updatedWeddingAvatar);
  };

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
      .patch(`${server}/update-wedding/${id}`,newForm, config)
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
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {profileAvatar ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={
                    profileAvatar instanceof File
                      ? URL.createObjectURL(profileAvatar)
                      : `http://localhost:2000/uploads/${profileAvatar}`
                  }
                  alt="Profile Avatar"
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
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {coverAvatar ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={
                    coverAvatar instanceof File
                      ? URL.createObjectURL(coverAvatar)
                      : `http://localhost:2000/uploads/${coverAvatar}`
                  }
                  alt="Cover Avatar"
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
            />
          </label>
          <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
            {weddingAvatar.map((avatar, index) => (
              <div key={index} className="flex flex-col gap-2">
                <span className="inline-block h-24 w-24 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    alt={`avatar-${index}`}
                    src={
                      avatar instanceof File
                        ? URL.createObjectURL(avatar)
                        : `http://localhost:2000/uploads/${avatar}`
                    }
                  />
                </span>
                <button
                  type="button"
                  className="bg-red-500 text-white"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            {weddingAvatar.length === 0 && (
              <RxAvatar className="h-24 w-24 text-gray-300" />
            )}
          </div>
        </div>
        <input
          type="submit"
          value="Update"
          className="bg-blue-500 text-white w-full py-1 cursor-pointer hover:bg-blue-600 active:bg-blue-400"
        />
      </form>
    </div>
  );
};
export default EditProduct;
