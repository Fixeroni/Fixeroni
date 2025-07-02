import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/artisan/dashboard/dashboard-pages/Messages')({
  component: Messages,
})

 function Messages() {
  return <div>
     <h2 className='Poppins text-[#1E1E1E] text-[36px] font-medium mt-4'>Hi Ben</h2>
     <p className="text-[#1E1E1E] text-[16px]">You have 5 new messages</p>


     <section>
    <div className='bg-[#FFFFFF] shawdow---feature mt-3 w-full rounded-[20px] py-[20px] px-[30px] h-[60px] flex items-center justify-between'>
        <h3 className='text-[#1E1E1E] font-normal text-[20px]'>Mechanic Schedule</h3>
        <p className='bg-[#10B981] text-[14px] w-[30px] aspect-square font-semibold cursor-pointer rounded-full flex justify-center items-center text-white' >5</p>
    </div>
</section>

  </div>;
}

export default Messages;








