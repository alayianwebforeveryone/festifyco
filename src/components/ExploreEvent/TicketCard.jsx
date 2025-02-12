


import React, { useRef, useEffect, useState } from "react";
import { FaArrowRight, FaCopy } from "react-icons/fa";
import Button from "../Common/Button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";

const TicketCard = ({ isVisible, close, eventCardData }) => {
  const hiddenInputRef = useRef(null); // Reference to the hidden input field
  const [randomPassId, setRandomPassId] = useState(""); // State to store the random pass ID

  const userName = useSelector((state) => state.auth.userData.name);

  const handleClose = (e) => {
    if (e.target.id === "container") close();
  };


// pdf download

const downloadPDF = async () => {
  try {
    const element = document.getElementById("pdf-content");
    const downloadButton = document.querySelector(".download-button");
    if (!element) {
      console.error("Element with ID 'pdf-content' not found.");
      return;
    }

      // Temporarily hide the download button
      if (downloadButton) {
        downloadButton.style.display = "none";
      }


    const canvas = await html2canvas(element, {
      useCORS: true, // To handle cross-origin images
      scale: 2, // For better resolution
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 230; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("ticket.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};



  useEffect(() => {
    if (isVisible) {
      generateRandomPassId();
    }
  }, [isVisible]);

  const generateRandomPassId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    const length = 20;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomPassId(result);
  };

  const handleCopyPassId = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = randomPassId; // Set the value to the input field
      hiddenInputRef.current.select(); // Select the text
      document.execCommand("copy"); // Copy the text
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        onClick={handleClose}
        id="container"
        className="fixed inset-0 z-40  bg-black/25 flex justify-center items-center">
        <div id="pdf-content" className="bg-[#E2D0FA] w-fit pb-7 h-fit rounded-xl hideScrollbar">
          {/* Header */}
          <div className="flex leading-none items-center sticky top-0 bg-[#60B0F4] left-0 box-border justify-between w-full overflow-hidden z-50 border-b-2 py-3">
            <div className="flex justify-start mx-6 w-full items-baseline">
              <FaArrowRight className="text-white cursor-pointer" onClick={close} />
            </div>
          </div>

          {/* Card Content */}
          <div className="flex flex-col py-6 px-10 space-y-2 sm:space-y-2 md:space-y-4 ">
            <h1 className="text-[1rem] font-extrabold leading-[2.269rem]">Name</h1>
            <p>{userName}</p>

            <h1 className="text-[1rem] font-extrabold leading-[2.269rem]">Event Name</h1>
            <p>{eventCardData.eventName}</p>

            <h1 className="sm:text-[1rem] font-extrabold leading-[2.269rem]">Pass Id</h1>
            <div className="flex items-center space-x-2">
              <p>{randomPassId}</p>
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

            <div className="">
              <p className="text-[#ea3d3d] font-bold ">Please Copy the pass Id. You can enter the event using this id </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center">
            <Button onClick={downloadPDF} 
            className="bg-white download-button hover:bg-[#A749FF] hover:text-white  text-red-950 border-2 border-[#60B0F4]">Download</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
