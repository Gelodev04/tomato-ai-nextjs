import { schoolStrategy } from "@/data/content"

export const SchoolStrategy = () => {
  return (
    <>
    {schoolStrategy.map((strategy, index) => (
      <div key={index} className='bg-white rounded-[20px] border p-[30px] border-[#DDD1C0] space-y-1'>
        <h6 className='text-[28px] font-[600]'>{strategy.title}</h6>
        <p className='text-[20px] text-[#656565] font-[400]'>{strategy.description}</p>
      </div>
    ))}
    </>
  )
}
