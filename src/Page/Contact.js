import React, { useState, useEffect } from "react";
import ContactInput from "../cards/contactInput";
import { useMutation } from "@apollo/client";
import { POST_CONTACT_MESSAGE } from "../graphql/mutation";
import Spinner from "../cards/Loader";

export default function Contact() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");

  const [mutateFunction, { loading }] = useMutation(POST_CONTACT_MESSAGE);

  async function ContactHandler() {
    if (message === "" || title === "" || email === "" || name === "") {
      setError("Please Fill in the fields.");
      setSucces("");
    }

    if (message !== "" && title !== "" && email !== "" && name !== "") {
      setError("");
      setSucces("");
      mutateFunction({
        variables: {
          name: name,
          title: title,
          message: message,
          email: email,
        },
      }).then(() => {
        setMessage("");
        setName("");
        setEmail("");
        setTitle("");
        setSucces("Success");
      });
    }
  }

  useEffect(() => {}, [loading]);

  console.log(loading);

  return (
    <div className="flex flex-col bg-primary-softblue justify-center items-center    h-screen">
      <p className="text-2xl font-bold mt-20  sm:mt-0 text-primary-asbestos animate-bounce">
        CONTACT ME
      </p>

      <div className="flex flex-col w-full p-5 sm:w-1/2">
        <ContactInput
          value={name}
          title="Full Name"
          placeholder="Please Enter Your Name"
          callback={setName}
        />

        <ContactInput
          value={email}
          title="Email"
          placeholder="Please Enter Email"
          callback={setEmail}
        />

        <ContactInput
          value={title}
          title="Title"
          placeholder="Please Enter Title"
          callback={setTitle}
        />

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Enter Your Message"
            class="w-full h-24 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border-2 border-primary-white rounded focus:border-primary-bluebell focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        {!loading ? (
          <div
            className="rounded-md transform hover:-translate-y-1 hover:scale-110 duration-500  bg-primary-hint hover:bg-primary-fueltown self-center  w-full sm:w-1/3 p-2 text-center cursor-pointer"
            onClick={ContactHandler}
          >
            <button className=" text-md sm:text-xl text-primary-white cursor-pointer">
              SEND
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        )}

        <div className="flex items-center text-center justify-center mt-5 font-bold text-primary-pomegranate">
          {error}
        </div>

        <div className="flex items-center text-center justify-center text-xl font-bold text-primary-fueltown">
          {success}
        </div>
      </div>
    </div>
  );
}
