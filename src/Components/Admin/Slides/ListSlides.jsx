import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../../../Server";
import { toast } from "react-toastify";

const ListSlides = () => {
  const [heroAvatar, setHeroAvatar] = useState([]);
  const [midAvatar, setMidAvatar] = useState([]);

  const fetchHeroData = async () => {
    await axios
      .get(`${server}/get-slide`)
      .then((res) => {
        setHeroAvatar(res.data.avatar);
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const fetchMidData = async () => {
    await axios
      .get(`${server}/get-mid`)
      .then((res) => {
        setMidAvatar(res.data.avatar);
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  useEffect(() => {
    fetchHeroData();
    fetchMidData();
  }, []);

  const handleHeroDelete = async (id) => {
    await axios
      .delete(`${server}/delete-slide/${id}`)
      .then((res) => {
        console.log(res);
        fetchHeroData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const handleMidDelete = async (id) => {
    await axios
      .delete(`${server}/delete-mid/${id}`)

      .then((res) => {
        fetchMidData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const handleHeroUpdateChange = async (id, event) => {
    const file = event.target.files[0];

    const config = {
      header: { "Content-Type": "multipart/form-data" },
    };
    const newForm = new FormData();
    newForm.append("file", file);

    await axios
      .patch(`${server}/update-slide/${id}`, newForm, config)
      .then((res) => {
        fetchHeroData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const handleMidUpdateChange = async (id, event) => {
    const file = event.target.files[0];
    const config = {
      header: { "Content-Type": "multipart/form-data" },
    };

    const newForm = new FormData();
    newForm.append("file", file);

    await axios
      .patch(`${server}/update-mid/${id}`, newForm, config)
      .then((res) => {
        fetchMidData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center pt-52">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl">Home Section Photos</h2>

        {heroAvatar.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
            {heroAvatar.map((hero) => (
              <div key={hero._id} className="px-20 py-4 space-y-2">
                <img
                  className="w-96 h-64"
                  src={`http://localhost:2000/uploads/${hero.heroAvatar}`}
                  alt=""
                />
                <button
                  className="bg-red-500 text-white w-full py-2"
                  onClick={() => handleHeroDelete(hero._id)}
                >
                  Delete
                </button>
                <label
                  className="ml- flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white cursor-pointer hover:bg-gray-50"
                  htmlFor={`file-input-${hero._id}`}
                >
                  <span>Update</span>
                  <input
                    type="file"
                    name="hero-avatar"
                    id={`file-input-${hero._id}`}
                    accept=".jpg,.jpeg,.heic,.png"
                    onChange={(event) =>
                      handleHeroUpdateChange(hero._id, event)
                    }
                    className="sr-only"
                  />
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className=" text-lg text-gray-500 text-center py-14">
            <p>No Photos in Your Database</p>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl">Mid Section Photos</h2>
        <div className="flex justify-center items-center gap-4 md:max-w-lg xl:max-w-6xl 2xl:max-w-full">
          {midAvatar.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-8">
              {midAvatar.map((mid) => (
                <div key={mid._id} className="px-20 py-4 space-y-2">
                  {/* {console.log(mid._id)} */}
                  <img
                    className="w-full"
                    src={`http://localhost:2000/uploads/${mid.midAvatar}`}
                    alt=""
                  />
                  <button
                    className="bg-red-500 text-white w-full py-2"
                    onClick={() => handleMidDelete(mid._id)}
                  >
                    Delete
                  </button>
                  <label
                    className="ml- flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white cursor-pointer hover:bg-gray-50"
                    htmlFor={`file-mid-input-${mid._id}`}
                  >
                    <span>Update</span>
                    <input
                      type="file"
                      name="mid-avatar"
                      id={`file-mid-input-${mid._id}`}
                      accept=".jpg,.jpeg,.heic,.png"
                      onChange={(event) =>
                        handleMidUpdateChange(mid._id, event)
                      }
                      className="sr-only"
                    />
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-14 text-lg text-gray-500 text-center">
              <p>No Photos in Your Database</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListSlides;
