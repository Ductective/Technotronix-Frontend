import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
function Cart() {
  const { cartitems, updateQuantity, deleteItem, totalAmount} = useContext(EcomContext);
  const cartTable = (
    <>
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
        {cartitems.products?.map((item) => (
          <tr className="border-b-2">
            <td>
              <button onClick={()=> deleteItem(item.id)}>
                <MdDelete className="text-2xl" />
              </button>
            </td>
            <td>{item.product.name}</td>
            <td>
              <div className="flex justify-center">
                <img src={"https://technotronix-backend.onrender.com" + item.img} className="h-[50px]" alt="" />
              </div>
            </td>
            <td>{item.product.price}</td>
            <td>
              <input type="number" className="outline outline-1" min='1' value={item.quantity} onChange={(e) => updateQuantity(item.id, e.target.value)} />
            </td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="w-[90%] mx-auto flex justify-between mt-5">
        <div><h1 className="text-4xl font-bold ">Total Amount = {totalAmount()}</h1></div>
        <div>
            <Link to="/checkout"><button className="p-[10px] bg-orange-500 rounded-md text-white">Checkout</button></Link>
        </div>
    </div>
    </>
  );

  return (
    <div className="m-[5%]">
      <h1 className="text-center font-bold text-3xl mb-10">Your Shop Cart</h1>
      {cartitems.length > 0 ? cartTable : <h1 className="text-center font-bold">No Items In Cart</h1>}
    </div>
  );
}

export default Cart;
