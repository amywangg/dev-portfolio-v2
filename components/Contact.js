import React, { useState } from "react";
import userData from "@constants/data";

import emailjs from "emailjs-com";

export default function Contact() {
  const [displayNotif, setDisplayNotif] = useState(false);

  const [state, setState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleTextChange = (event) => {
    const isInvalidName = state.name == "";
    const isInvalidEmail = !/\S+@\S+\.\S+/.test(state.email);
    setState({
      ...state,
      nameError: isInvalidName,
      emailError: isInvalidEmail,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isInvalidEmail = !/\S+@\S+\.\S+/.test(state.email);
    setState({
      ...state,
      emailError: isInvalidEmail,
      submitForm: !isInvalidEmail,
    });
    if (!isInvalidEmail) {
      let content = {
        email: state.email,
        message: state.message,
        name: state.name,
        company: state.company,
      };
      emailjs
        .send(
          "service_98n0ouc",
          "template_ko25tam",
          content,
          "user_bxH6ibvjkfv0Krn5dJhrR"
        )
        .catch((err) =>
          console.error(
            "Uh Oh. Here some thoughts on the error that occured:",
            err
          )
        );
      setDisplayNotif(true);
      setTimeout(() => {
        setDisplayNotif(false);
      }, 2000);
      setState({ name: "", email: "", company: "", message: "" });
    }
  };
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="relative bg-slate-100 dark:bg-gray-800 px-[8vw] py-12">
        {displayNotif && (
          <div
            id="toast-top-left"
            class="fixed flex items-center w-40 px-4 py-2 space-x-4 text-gray-800 bg-yellow-500 divide-x divide-gray-200 rounded-md shadow top-5 right-5 dark:text-gray-50 dark:divide-gray-700 space-x dark:bg-yellow-400"
            role="alert"
          >
            <div class="text-normal font-normal"> Message sent!</div>
          </div>
        )}
        <p className=" border-l-8 border-purple-400 pl-2 text-5xl font-bold my-2">
          Contact
        </p>
        <p className="text-base my-6">
          If you want to send a direct email with any questions about my
          experiences or projects, feedback on this portfolio site,
          opportunities for work, or just because... you can reach me on
          LinkedIn, phone, or e-mail. Below is a form you can fill out to
          directly send an email with your contact information and I'll be sure
          to get back to you!
        </p>
      </div>

      <div className="dark:bg-gray-900 px-[8vw] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-800 dark:text-gray-50 font-semibold text-3xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base dark:text-gray-200 text-gray-500 mt-2">
                Fill in the details and I'll get back to you as soon as I can.
                You can also reach me via LinkedIn or Phone.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center space-x-6 rounded-md border  border-transparent hover:border hover:border-gray-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-yellow-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-gray-800 dark:text-gray-50 font-light text-sm">
                  {userData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border  border-transparent hover:border hover:border-gray-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-yellow-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-800 dark:text-gray-50 font-light text-sm">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-transparent hover:border hover:border-gray-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-yellow-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-800 dark:text-gray-50 font-light text-sm">
                  {userData.address}
                </p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="form rounded-md bg-slate-100 dark:bg-gray-800 dark:text-gray-400 p-4 flex flex-col"
          >
            <label htmlFor="name" className="text-sm mx-4">
              Your Name
            </label>
            <input
              type="text"
              className="dark:bg-slate-700 font-light rounded-md border dark:border-transparent focus:outline-none py-2 mt-2 px-2 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              id="name"
              name="name"
              value={state.name}
              onChange={handleTextChange}
            />
            <label htmlFor="email" className="text-sm  mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="dark:bg-slate-700 font-light rounded-md border dark:border-transparent focus:outline-none py-2 mt-2 px-2 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              id="email"
              name="email"
              value={state.email}
              onChange={handleTextChange}
            />
            <label htmlFor="message" className="text-sm  mx-4 mt-4">
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              id="message"
              onChange={handleTextChange}
              value={state.message}
              name="message"
              className="dark:bg-slate-700 font-light rounded-md border dark:border-transparent focus:outline-none py-2 mt-2 px-2 mx-4 focus:ring-2 focus:border-none ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 dark:bg-yellow-500 rounded-md w-1/2 mx-auto mt-8 py-2 text-gray-800 dark:text-gray-50 font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
