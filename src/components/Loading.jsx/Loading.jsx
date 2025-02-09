import { FaSpinner } from "react-icons/fa6";


export default function Loading() {
  return (
   <div className='w-full h-[100vh] bg-slate-300 bg-opacity-35  flex items-center justify-center'>
   
   
                   <FaSpinner className="text-5xl animate-spin" />
               </div>
  )
}
