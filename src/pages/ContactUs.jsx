import { useState } from 'react';
import FormService from '../services/FormService';

const ContactUs = () => {
  const [user, setUser] = useState({
    emailAddress: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const getUserByEmail = (e) => {
    e.preventDefault();
    FormService.captureUserDetails(user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-16">
        <h1 className="text-4xl font-bold pb-12">Contact Us Now</h1>
        <div className="flex w-1/2 md:w-4/5">
          <form action="" className="flex w-full">
            <div className="flex flex-col w-full space-y-4">
              <input
                type="text"
                name="emailAddress"
                id="emailAddress"
                placeholder="Email Address..."
                value={user.emailAddress}
                onChange={(e) => handleChange(e)}
                className="border px-3 py-2 w-full border-stone-300 rounded-md placeholder:text-stone-600 outline-none focus:border-blue-600 focus:border-2"
              />
              <textarea
                cols="30"
                rows="10"
                type="text"
                name="message"
                id="message"
                placeholder="Message..."
                value={user.message}
                onChange={(e) => handleChange(e)}
                className="border px-3 py-2 w-full border-stone-300 rounded-md placeholder:text-stone-600 outline-none focus:border-blue-600 focus:border-2"
              ></textarea>
              <button
                onClick={getUserByEmail}
                className="rounded-md bg-purple-600 text-white p-2 w-20 hover:bg-purple-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
