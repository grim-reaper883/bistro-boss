import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();




  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500
          });
        }

      }
    });
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle heading="Manage All Items" subHeading="Hurry Up" />
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                menu.map((item, i) => <tr key={item._id}>
                  <td>
                    {i + 1}
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td className="text-right">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn bg-orange-500 btn-ghost btn-sm"><FaTrashAlt className="text-white" /></button>
                  </td>
                </tr>)
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;