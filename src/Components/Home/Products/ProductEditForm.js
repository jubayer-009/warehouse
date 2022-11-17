import React from 'react';
import { useForm } from 'react-hook-form';

const ProductEditForm = ({id}) => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
     console.log(id);
    const name=data.name;
    const picture=data.picture;
    const about=data.about;
    const price=data.price;
    const quantity=data.quantity;
    const updatedDoc = { name, picture, about, price, quantity };
     fetch(`http://localhost:5000/products/${id}`, {
       method: "PUT",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(updatedDoc),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log("Data updated Succesfully");
       });
   
    console.log(updatedDoc);
  
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold text-center ">
              Product Information!
            </h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text  ">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name here"
                class="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>
            <div class="form-control mx-auto">
              <label class="label">
                <p class="label-text ">
                  About <span className="text-red-600">*</span>
                </p>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                {...register("about", {
                  required: {
                    value: true,
                    message: "This field is reqiured",
                  },
                })}
              />
              <label class="label">
                {errors.about?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.about.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control mx-auto">
              <label class="label">
                <p class="label-text  ">
                  Price <span className="text-red-600">*</span>
                </p>
              </label>
              <input
                type="number"
                placeholder="Price here"
                class="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is reqiured",
                  },
                  min: {
                    value: 10,
                    message: "Price can't be less than 10 TK",
                  },
                })}
              />
              <label class="label">
                {errors.price?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
                {errors.price?.type === "min" && (
                  <span class="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control mx-auto">
              <label class="label">
                <p class="label-text  ">
                  Quantity<span className="text-red-600">*</span>
                </p>
              </label>
              <input
                type="number"
                placeholder="Quantity Here "
                class="input input-bordered w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "quantity is reqiured",
                  },
                  min: {
                    value: 2,
                    message: "Quantity value must be greater than 2",
                  },
                })}
              />
              <label class="label">
                {errors.quantity?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "min" && (
                  <span class="label-text-alt text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text  ">Product Image</span>
              </label>
              <input
                type="url"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                {...register("picture")}
              />
             
            </div>
            <input
              type="submit"
              value="Update"
              className="btn bg-secondary  rounded-full 
                 hover:bg-base-100 hover:text-white hover:btn-accent mt-5 text-white "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEditForm;