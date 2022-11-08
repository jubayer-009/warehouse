import React from 'react';
import { useForm } from 'react-hook-form';

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
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Get In Touch!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore distinctio quod hic et quis ratione maxime assumenda ipsum alias.
            </p>
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
                    placeholder='Name'
                      className="input input-bordered w-full max-w-xs mr-2"
                      {...register("name")}
                    />
                    <input
                      type="text"
                      placeholder='Subject'
                      className="input input-bordered w-full max-w-xs "
                      {...register("subject")}
                    />
                  </div>
                  <div className="flex py-2">
                    <input
                      type="email"
                      placeholder='Email'
                      className="input input-bordered w-full max-w-xs mr-2 "
                      {...register("email")}
                    />
                    <input
                      type="number"
                      placeholder='Phone'
                      className="input input-bordered w-full max-w-xs "
                      {...register("number")}
                    />
                  </div>
                  <div className="py-2">
                    <textarea
                      className="textarea textarea-bordered w-full "
                      placeholder="Message"
                      {...register("message")}
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    value="Send"
                    className="btn bg-primary  rounded-lg text-white
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