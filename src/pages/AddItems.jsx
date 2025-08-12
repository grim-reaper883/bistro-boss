import SectionTitle from "../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    //image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      const menuRes = await axiosSecure.post('/menu', menuItem);
      // console.log(menuRes.data)
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data)
  };
  return (
    <div>
      <SectionTitle heading='add an item' subHeading="what's new?" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Recipe Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Name</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter recipe name"
              {...register("name", { required: true })}
            />
          </fieldset>

          <div className="flex flex-wrap gap-6">
            {/* Category */}
            <fieldset className="fieldset flex-1 min-w-[200px]">
              <legend className="fieldset-legend">Category</legend>
              <select
                className="select w-full"
                defaultValue=""
                {...register("category", { required: true })}
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </fieldset>


            {/* Price */}
            <fieldset className="fieldset flex-1 min-w-[150px]">
              <legend className="fieldset-legend">Price</legend>
              <input
                type="number"
                step="0.01"
                className="input w-full"
                placeholder="Price"
                {...register("price", { required: true, valueAsNumber: true })}
              />
            </fieldset>
          </div>

          {/* Recipe Details */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details</legend>
            <textarea
              className="textarea w-full h-24"
              placeholder="Enter recipe details"
              {...register("recipe", { required: true })}
            />
          </fieldset>

          {/* Image Upload */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Image</legend>
            <input
              type="file"
              className="file-input file-input-ghost w-full"
              {...register("image", { required: true })}
            />
          </fieldset>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Add Item
          </button>
        </form>
      </div>

    </div>


  );
};

export default AddItems;