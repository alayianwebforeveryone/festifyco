import Image from 'next/image';
import React from 'react'
import Button from '../Common/Button';
import img1 from '../../../Assets/Images/artExibition.jpg'
import img2 from '../../../Assets/Images/music.jpg'
import img3 from '../../../Assets/Images/tech.jpg'

const CatogoriesCard = () => {
    const CateCard = [
        {
            id: 1,
            title: "Art Exhibition||Art Exhibition",

            image: img1,

        },
        {
            id: 2,
            title: "Music Festival|| Music Festival",

            image: img2,

        },
        {
            id: 3,
            title: "Tech Conference||Music Festival",

            image: img3,

        },
    ];
    return (
        <>
       
  <div className="max-w-full mx-auto p-8 sm:p-0 lg:p-8 py-20 ">
    <h1 className="text-[#9747FF] text-2xl sm:text-3xl md:text-4xl my-10 text-center font-bold leading-tight">
      Our Event Categories
    </h1>
    <div className="grid gap-10 sm:gap-4 md:gap-16  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {CateCard.map((card) => (
        <div
          key={card.id}
          className="p-2 border-2 border-[#9747FF] rounded-xl bg-[#D9D9D9] flex flex-col items-center space-y-4 "
        >
          <span className="w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
            <Image
              src={card.image}
              alt={card.title}
              className=" w-full sm:w-[335px] lg:w-full h-full object-full"
            />
          </span>
          <h3 className="text-center text-[20px] md:text-[16px] font-bold text-gray-800">
            {card.title}
          </h3>
          <Button className="bg-[#60B0F4] text-white px-6 py-2 rounded-full">
            Book Now
          </Button>
        </div>
      ))}
    </div>
  </div>



        </>
    )
}

export default CatogoriesCard