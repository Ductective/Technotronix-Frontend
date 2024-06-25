

function Card({children}) {
  return (
    <div className="border border-black w-[280px] text-center rounded-lg pb-[10px] shadow-xl">
        {children}
    </div>
  )
}

export default Card