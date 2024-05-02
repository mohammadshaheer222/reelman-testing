import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { server } from "../../../../Server";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newForm = {
      email: email,
      password: password,
    };

    axios
      .post(`${server}/login`, newForm)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        setEmail("");
        setPassword("");
        setError("");
        navigate("/reelman-admin/dashboard");
      })
      .catch((error) => setError(error.response.data.message));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <form
        className="flex flex-col gap-6 w-full max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-medium">ReelMan Productions</h1>

        <div>
          <input
            className="bg-gray-200 px-4 py-2 outline-none w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="relative">
          <input
            className="bg-gray-200 px-4 py-2 outline-none w-full "
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {visible ? (
            <AiOutlineEyeInvisible
              onClick={() => setVisible(false)}
              size={25}
              className={`absolute right-2 top-2 cursor-pointer text-gray-500 ${
                password ? "block" : "hidden"
              }`}
            />
          ) : (
            <AiOutlineEye
              onClick={() => setVisible(true)}
              size={25}
              className={`absolute right-2 top-2 cursor-pointer text-gray-500 ${
                password ? "block" : "hidden"
              }`}
            />
          )}
        </div>

        <div className="space-y-2">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="submit"
            //   value="Login"
            className="w-full bg-blue-500 text-white py-2 cursor-pointer hover:bg-blue-600 active:bg-blue-400"
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
