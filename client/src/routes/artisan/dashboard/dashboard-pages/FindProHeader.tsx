import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from "react";

export const Route = createFileRoute(
  '/artisan/dashboard/dashboard-pages/FindProHeader',
)( {
  component: RouteComponent,
} );

function RouteComponent() {
  const [distancemodal, setDistanceModal] = useState(false);
  const [value, setValue] = useState<number>(0);
  
  function toggleDistanceModal() {
    setDistanceModal(!distancemodal);
  }

  if (distancemodal) {
    document.body.classList.add("overflow-x-hidden");
  } else {
    document.body.classList.remove("overflow-x-hidden");
  }

  const [city, setCity] = useState(false);
  function toggleCity() {
    setCity(!city);
  }

  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  const [status, setStatus] = useState(false);
  function toggleStatus() {
    setStatus(!status);
  }

  if (status) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
    <h3 className='Poppins text-[#1E1E1E] text-[30px] font-medium mt-4'>Find a Pro</h3>

    <div className=' p-[10px] flex items-center justify-between'>
      <button className='shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px] rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center'>
        All Kinds 
        <i className="fa-solid fa-chevron-down text-sm ml-[10px]"></i>
      </button>
      <button className='shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px] rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center'>
        All Distance
        <i className="fa-solid fa-chevron-down text-sm ml-[15px]"></i>
      </button>
      <button className='shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px] rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center'>
        All Status 
        <i className="fa-solid fa-chevron-down text-sm ml-[10px]"></i>
      </button>
      <button className='shadow-[2px_2px_5px_rgba(0,0,0,0.05)] p-[15px] pl-[17px] pr-[17px] rounded-tr-[20px] rounded-[26px] bg-[#fff] outline-none flex items-center justify-center'>
        All Cities 
        <i className="fa-solid fa-chevron-down text-sm ml-[10px]"></i>
      </button>
    </div>

    <div>
      <section>
        <div className='flex'>
          <div className='flex items-center ml-auto p-2.5 mt-2.5 gap-3'>
            <img src="/images/icons/notification_profile.png" alt="notification" />
            <img src="/images/icons/Profile_img.png" alt="Profile_img" />
          </div>
        </div>
        <hr className='w-full opacity-[0.4] border-[#0000007f] border mt-2'/>

        <h3 className='Poppins text-[#1E1E1E] text-[30px] font-medium mt-4'>Find a Pro</h3>

        {city && (
          <div className='modal-contents fixed top-[170px] left-[800px] rounded-[25px] w-[17%] flex flex-col gap-[2px] bg-[white] pb-[20px] z-50'>
            <div className='flex pl-[23px] pr-[30px] justify-between item-center mt-[20px]'>
              <p className='text-[20px] text-poppins'>City</p>
              <button onClick={toggleCity}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <div className="container grid grid-cols-5 grid-rows-3 gap-2 p-[20px]">
              <div className="flex items-center col-span-1 "><input type='checkbox'/></div>
              <div className="flex items-center col-span-3 text-black ">All Cities</div>
              <div className="col-span-1 flex items-center text-black ">100</div>
              {/* ... Continue for other cities */}
            </div>
            <div className='w-[100%] mt-[20px] flex justify-center'>
              <button type='submit' className='w-[80%] p-[3px] rounded-[15px] bg-[black] text-[18px] text-[white]'>Apply</button>
            </div>
          </div>
        )}

        {status && (
          <div className='modal-contents fixed top-[170px] left-[560px] rounded-[25px] w-[17%] flex flex-col gap-[2px] bg-[white] pb-[20px] z-50'>
            <div className='flex pl-[23px] pr-[30px] justify-between item-center mt-[20px]'>
              <p className='text-[20px] text-poppins'>Status</p>
              <button onClick={toggleStatus}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <div className="relative w-full">
              <div className="container grid grid-cols-5 grid-rows-3 gap-2 p-[20px]">
                {/* Similar content for status */}
              </div>
              <div className='w-[100%] mt-[20px] flex justify-center'>
                <button type='submit' className='w-[80%] p-[3px] rounded-[15px] bg-[black] text-[18px] text-[white]'>Apply</button>
              </div>
            </div>
          </div>
        )}

        <div className=' p-[10px] flex items-center justify-between'>
          {distancemodal && (
            <div className='modal-contents fixed top-[170px] left-[400px] rounded-[25px] w-[17%] flex flex-col gap-[2px] bg-[white] pb-[20px] z-50'>
              <div className='flex pl-[23px] pr-[30px] justify-between item-center mt-[20px]'>
                <p className='text-[20px] text-poppins'>Distance</p>
                <button onClick={toggleDistanceModal}><i className="fa-solid fa-times"></i></button>
              </div>
              <div className='pl-[10px] mt-[10px] flex justify-between pr-[10px]'>
                <div className='w-[40%]'><label>Min</label>
                  <input className='w-[100%] border border-[black] outline-none pl-[5px] pr-[5px]' />
                </div>
                <div className='w-[40%]'><label>Max</label>
                  <input className='w-[100%] border border-[black] outline-none pl-[5px] pr-[5px]' />
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full h-[2px]  bg-[gray-300] rounded-lg appearance-none cursor-pointer"
                />
                <div className="absolute top-[15px] left-0 h-[2px] bg-[black] rounded-lg" style={{ width: `${value}%` }}></div>
                <div className='w-[100%] mt-[20px] flex justify-center'>
                  <button type='submit' className='w-[80%] p-[3px] rounded-[15px] bg-[black] text-[18px] text-[white]'>Apply</button>
                </div>
              </div>
            </div>
          )}

          {modal && (
            <div className='rounded-[25px] fixed top-[180px] w-[15%] bg-[#fff] pb-[20px] z-70 h-[400px] overflow-y-auto'>
              <div className='w-[14%] pl-[15px] fixed bg-[#fff] z-100 pr-[15px] flex justify-between items-center pt-[20px]'>
                <p className='text-[20px] text-poppins ml-[17px]'>Kinds</p>
                <button>
                  <i onClick={toggleModal} className="fa-solid fa-times text-[20px] mr-[17px]"></i>
                </button>
              </div>
              <div className="modal-content pl-[20px] pt-[20px]">
                {/* Add the modal content */}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
}

export default RouteComponent;
