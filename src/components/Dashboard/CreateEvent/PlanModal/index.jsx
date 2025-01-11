import Button from '../../../../components/Common/Button';
import React from 'react'
import { TiTick } from 'react-icons/ti';

const PlanModal = ({isOpen, onClose, planType}) => {
    if (!isOpen) return null;
    const planData =  [
      { 
         "id": 1,
        "planName": "Basic Plan",
    
          "Attendees": "100",
            "food": "Refreshment",
            "Items": "4",
      },
      {
        "id": 2,
        "planName": "Premium Plan",
          "Attendees": "500",
            "food": "Lunch/Dinner",
            "Items": "4",
      },
      {
        "id": 3,
        "planName": "Royal Plan",
          "Attendees": "1000",
            "food": "Lunch/Dinner",
            "Items": "8",
      },
      
    
     
    ]
      
    //   // Filter the plan data to find the matching plan
      const data = planData.find((plan) => plan.planName === planType);
  return (
    <>
     <div className=" mt-60 mb-20 w-[90%] mx-auto flex flex-wrap gap-10 justify-center py-8">
        
                
       <div className="mt-60 mb-20 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
     <div className="  w-[70%] sm:w-[45%] lg:w-[25%] space-y-6 border-2 bg-[#E2D0FA] border-[#9747FF] p-6 flex flex-col">
          <Button className="bg-[#60B0F4] rounded-md w-[60%] mx-auto cursor-default">
            {data.planName}
          </Button>
          <h1 className="font-bold text-lg text-center">Venus</h1>

          {/* Venues */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm">
                Handle <span className="text-[#6f39b6] font-bold text-[18px] ">{data.Attendees}</span>  Number of People
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm">Indoor</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm">Sound system</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm">Power backup</p>
            </div>
          </div>

          <h1 className="font-bold text-lg text-center">Menu</h1>

          {/* Menu */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
             
              <p className="text-sm ">{data.food}</p>
              </div>
              <div className="flex items-center gap-2">
              <span className="rounded-full p-1 bg-[#9747FF]">
                <TiTick className="text-white" />
              </span>
              <p className="text-sm ">Chose {data.Items} items from meue</p>
            </div>
          </div>
               <Button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-[#60B0F4] text-white rounded-lg"
              >
                Close
              </Button>
          
        </div>
        </div>
    

</div>
    
    </>
  )
}

export default PlanModal