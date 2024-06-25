import thanks from "/img/ThankYou.jpg"

function ThankYou() {
  return (
    <div className="flex flex-col items-center my-[5%]">
        <img src={thanks} className="h-[200px] w-[50%] " alt=""/>
        <p className="text-2xl my-[3%] ">Thamk you for your purchase RoadRunner, a representative will get back to you shortly</p>
        <button className="bg-orange-500 text-white p-[10px] rounded-md hover:text-black">Manage Orders</button>
    </div>
  )
}

export default ThankYou