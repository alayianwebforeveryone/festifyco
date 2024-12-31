import React, { useRef } from "react";
import { FaArrowRight, FaCopy } from "react-icons/fa";
import Button from "../Common/Button";
import { personData } from '../../json/event.js';
import { useSelector } from "react-redux";

const TicketCard = ({ isVisible, close }) => {
  const hiddenInputRef = useRef(null); // Reference to the hidden input field


  const userName = useSelector((state)=> state.auth.userData.name)

  const handleClose = (e) => {
    if (e.target.id === "container") close();
  };

  if (!isVisible) return null;

  const onePerson = personData[0]; // Fetching the first person's data

  const handleCopyPassId = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = onePerson.passId; // Set the value to the input field
      hiddenInputRef.current.select(); // Select the text
      document.execCommand("copy"); // Copy the text
      
    }
  };

  // getting username 


  return (
    <>
      <div
        onClick={handleClose}
        id="container"
        className="fixed inset-0 bg-black/25 flex justify-center items-center">
        <div className="bg-[#E2D0FA] w-[90%]   lg:w-[20%] h-[50%] rounded-xl hideScrollbar">
          {/* Header */}
          <div className="flex leading-none items-center sticky top-0 bg-[#60B0F4] left-0 box-border justify-between w-full overflow-hidden z-50 border-b-2 py-3">
            <div className="flex justify-start mx-6 w-full items-baseline">
              <FaArrowRight className="text-white cursor-pointer" onClick={close} />
            </div>
          </div>

          {/* Card Content */}
          <div className="flex flex-col py-6 px-10 space-y-6">
            <h1 className="text-[1.875rem] font-extrabold leading-[2.269rem]">Name</h1>
            <p>{userName}</p>
            <h1 className="text-[1.875rem] font-extrabold leading-[2.269rem]">Event Name</h1>
            <p>{onePerson.eventName}</p>
            <h1 className="text-[1.875rem] font-extrabold leading-[2.269rem]">Pass Id</h1>
            <div className="flex items-center space-x-2">
              <p>{onePerson.passId}</p>
              <FaCopy
                className="text-blue-500 cursor-pointer"
                onClick={handleCopyPassId}
                title="Copy Pass ID"
              />
              {/* Hidden input field */}
              <input
                ref={hiddenInputRef}
                type="text"

                readOnly
                className="absolute opacity-0 bg-red pointer-events-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center">
            <Button className="bg-white text-red-950 border-2 border-[#60B0F4]">Download</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
