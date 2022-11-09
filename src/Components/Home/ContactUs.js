import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
          <div className="text-center lg:text-left flex-initial w-96 ml-9    lg:justify-items-start ">
            <h1 className="text-5xl font-bold">Get In Touch!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              labore distinctio quod hic et quis ratione maxime assumenda ipsum
              alias.
            </p>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mail-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p className="pl-3">marjanshanto@gmail.com</p>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 phone-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>

              <p className="pl-3">+8801578154587</p>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 location-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <p className="pl-3">Balucor,tilagor,Sylhet</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="max-w-sm py-7">
                <h1 className="text-xl font-bold text-center text-priamry ">
                  <span className="text-secondary text-xl font-bold px-7 ">
                    \\
                  </span>
                  Leave a Message
                  <span className="text-secondary text-xl font-bold px-7 ">
                    \\
                  </span>
                </h1>
                <form className=" py-7" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex py-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered w-full max-w-xs mr-2 border-secondary"
                      {...register("name")}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input input-bordered w-full max-w-xs border-secondary"
                      {...register("subject")}
                    />
                  </div>
                  <div className="flex py-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered w-full max-w-xs mr-2  border-secondary"
                      {...register("email")}
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      className="input input-bordered w-full max-w-xs border-secondary"
                      {...register("number")}
                    />
                  </div>
                  <div className="py-2">
                    <textarea
                      className="textarea textarea-bordered w-full border-secondary"
                      placeholder="Message"
                      {...register("message")}
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    value="Send"
                    className="btn bg-secondary  rounded-lg text-white
                 hover:bg-base-100 hover:text-white hover:btn-accent mt-5 "
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;