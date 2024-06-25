import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
function Checkout() {
  const { cartitems, totalAmount } = useContext(EcomContext);
  return (
    <div className="flex gap-5 m-[5%]">
      <div className="w-[50%] ">
        <h1 className="text-center font-bold text-3xl mb-10">Your Shop Cart</h1>
        <table className="w-[90%] mx-autp h-[30vh]">
          <thead>
            <th>Action</th>
            <th>Item</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </thead>
          <tbody className="text-center">
            {cartitems.map((item) => (
              <tr className="border-b-2">
                <td>{item.name}</td>
                <td>
                  <div className="flex justify-center">
                    <img src={item.img} className="h-[50px]" alt="" />
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <input
                    type="number"
                    className="outline outline-1"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  />
                </td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-[90%] mx-auto flex justify-between mt-5">
          <div>
            <h1 className="text-4xl font-bold ">
              Total Amount = {totalAmount()}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <h1 className="mb-5  font-bold text-center">Delivery Information</h1>
        <form action="">
          <div className="flex flex-col gap-3 mb-3">
            <label className="font-bold" htmlFor="firstname">
              First Name <input type="text" className="outline outline-1 " />
            </label>
            <label className="font-bold" htmlFor="lastname">
              Last Name <input type="text" className="outline outline-1 " />
            </label>
            <label className="font-bold" htmlFor="phonenumber">
              Phone Number <input type="text" className="outline outline-1 " />
            </label>
          </div>
          <div className="flex flex-col gap-3 mb-3 ">
            <label htmlFor="address">
              Address{" "}
              <textarea
                className="outline outline-1 "
                name=""
                id=""
                cols="10"
                rows="5"
              ></textarea>
            </label>
          </div>
          <div>
            <button className="bg-black text-white p-[10px] rounded-md hover:bg-orange-500">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
