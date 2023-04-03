import React from "react";

function Delivery() {
  return (
    <div className="xsm:w-screen flex justify-around p-10 mt-5 shadow-lg ">
      <div className="flex border lg:p-8 xsm:p-5 border-slate-400">
        <div className="lg:pr-5 xsm:pr-2  border-r-2 border-slate-400 ">
          {/* <img src="/assets/truck.png" className="w-14" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="xsm:w-8 xsm:h-8 lg:w-14 lg:h-14  text-[#82237c]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        </div>
        <div className="xsm:pl-2 lg:pl-5 lg:pt-2 xsm:text-[8px] lg:text-[20px]">
          Free Delivery <br />
          from RS:15000
        </div>
      </div>
      <div className="flex  border lg:p-8 xsm:p-5 border-slate-500">
        <div className="lg:pr-5 border-r-2 border-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="xsm:w-8 xsm:h-8 lg:w-14 lg:h-14 text-[#82237c]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="lg:pl-5 xsm:text-[8px] lg:text-[20px] xsm:pl-2 ">
          Cash On Delivery <br />
          from start
        </div>
      </div>
      <div className="flex  border lg:p-8 xsm:p-5 border-slate-500">
        <div className="lg:pr-5 border-r-2 border-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="xsm:w-8 xsm:h-8 lg:w-14 lg:h-14 text-[#82237c]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </div>
        <div className="lg:pl-5 xsm:text-[8px] lg:text-[20px] xsm:pl-2">
          Free Gift Box
          <br />
          on Special Days
        </div>
      </div>
    </div>
  );
}

export default Delivery;
