import { useEffect, useState } from "react";
import { server } from "../../../../Server";
import axios from "axios";
import { Link } from "react-router-dom";

const ListWedding = () => {
  const [weddingData, setWeddingData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${server}/get-wedding`);
      setWeddingData(response.data.wedding);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    await axios
      .delete(`${server}/delete-wedding/${id}`)
      .then((res) => fetchData())
      .catch((error) => console.log(error));
  };

  return (
    <div className="pt-20 max-h-[77vh] overflow-auto px-4 md:px-2 text-center">
      <table className="w-full mx-auto border-2">
        <thead>
          <tr className="text-start py-12 bg-gray-200">
            <th className="p-2 border-2">Profile</th>
            <th className="p-2 border-2">Cover</th>
            <th className="p-2 border-2">Images</th>
            <th className="p-2 border-2">Bride</th>
            <th className="p-2 border-2">Groom</th>
            <th className="p-2 border-2">Quote</th>
            <th className="p-2 border-2">Description</th>
            <th className="p-2 border-2"></th>
          </tr>
        </thead>
        <tbody>
          {weddingData.map((data) => (
            <tr key={data._id}>
              <td className="p-4 border-2">
                <img
                  src={`http://localhost:2000/uploads/${data.profile}`}
                  alt=""
                />
              </td>
              <td className="p-4 border-2">
                <img
                  src={`http://localhost:2000/uploads/${data.cover}`}
                  alt=""
                />
              </td>
              <td className="p-4 border-2">
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {data.weddingAvatar.map((image, index) => (
                    <img
                      key={index}
                      width={50}
                      src={`http://localhost:2000/uploads/${image}`}
                      alt=""
                    />
                  ))}
                </div>
              </td>
              <td className="p-4 border-2">
                <div>{data.bride}</div>
              </td>
              <td className="p-4 border-2">
                <div>{data.groom}</div>
              </td>
              <td className="p-4 border-2">
                <div>{data.quote}</div>
              </td>
              <td className="p-4 border-2">
                <div>{data.description}</div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-2 p-4">
                  <Link
                    to={`/reelman-admin/edit-wedding/${data._id}`}
                    className="bg-blue-500 text-white px-6 py-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="bg-red-500 text-white px-6 py-1"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListWedding;
