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
    <div className=" my-9 ">
      <h1 className="text-5xl font-bold text-center text-priamry ">
        <span className="text-secondary text-5xl font-bold px-7 ">\\</span>
        Contact Us
        <span className="text-secondary text-5xl font-bold px-7 ">\\</span>
      </h1>

      <div className="flex items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <input
              type="text"
              defaultValue="Name Here"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />
            <input
              type="text"
              defaultValue="Subject Here"
              className="input input-bordered w-full max-w-xs"
              {...register("subject")}
            />
          </div>
          <div className="flex">
            <input
              type="email"
              defaultValue="Email Here"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
            <input
              type="number"
              defaultValue="Number Here"
              className="input input-bordered w-full max-w-xs"
              {...register("number")}
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Bio"
              {...register("message")}
            ></textarea>
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;