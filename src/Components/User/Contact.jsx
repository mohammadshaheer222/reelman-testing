import { useState } from "react";
import { server } from "../../../Server";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [photography, setPhotography] = useState(false);
  const [videography, setVideography] = useState(false);
  const [both, setBoth] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`${server}/user/contact-form`, {
        name,
        email,
        phone,
        message,
        location,
        date,
        photography,
        videography,
        both,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-full w-full flex justify-center items-center px-4 py-20 ">
      <form
        className="space-y-6 text-sm md:text-lg p-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-2">
          {/* <label htmlFor="name" className="text-gray-500">
            Name
          </label> */}
          <input
            className=" px-3 py-2 outline-none rounded-lg"
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* <label htmlFor="email" className="text-gray-500">
            Email
          </label> */}
          <input
            className=" py-2 px-3 outline-none rounded-lg"
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* <label htmlFor="phone" className="text-gray-500">
            Phone
          </label> */}
          <input
            className=" px-3 py-2 outline-none rounded-lg appearance-none"
            type="number"
            name="phone"
            id="phone"
            autoComplete="phone"
            placeholder="Phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* <label htmlFor="message" className="text-gray-500">
            Tell us more about your wedding - event flow, venues.
          </label> */}
          <textarea
            className=" px-2 py-2 resize-none outline-none w-full rounded-lg"
            id="message"
            name="message"
            rows="6"
            cols="50"
            placeholder=" Tell us more about your wedding - event flow, venues."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* <label htmlFor="location" className="text-gray-500">
            Location of the wedding
          </label> */}
          <input
            className=" px-3 py-2 outline-none rounded-lg"
            type="text"
            name="location"
            id="location"
            placeholder="Location of the wedding"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* <label htmlFor="date" className="text-gray-500">
            Event Dates
          </label> */}
          <input
            className=" px-3 py-2 outline-none rounded-lg"
            type="text"
            name="date"
            id="date"
            value={date}
            placeholder="Event Dates"
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-y-4 text-gray-500">
          <label htmlFor="">What services are you looking for?</label>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="photography"
              id="photography"
              checked={photography}
              onChange={(event) => setPhotography(event.target.checked)}
            />
            <label htmlFor="">Photography</label>
          </div>
          <div className="flex juc items-center gap-4">
            <input
              type="checkbox"
              name="videography"
              id="videography"
              checked={videography}
              onChange={(event) => setVideography(event.target.checked)}
            />
            <label htmlFor="videography">Videography</label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="both"
              id="both"
              checked={both}
              onChange={(event) => setBoth(event.target.checked)}
            />
            <label htmlFor="both">Both Photography and Videography</label>
          </div>
        </div>
        <input type="submit" className="bg-black hover:bg-gray-900 active:bg-gray-800 w-full text-white py-2 cursor-pointer rounded-lg" />
      </form>
    </div>
  );
};
export default Contact;
