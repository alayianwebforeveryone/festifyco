import Image from "next/image";
import dateIcon from "../../../Assets/icons/date.svg";

const ExploreEventCard = ({ eventCardData }) => {
  return (
    <div
      className="border-2 border-[#9747FF] rounded-[20px] px-2  pt-2 pb-3 "
      key={Date.now()}
    >
      <figure>
        <Image
          src={eventCardData.image}
          alt={eventCardData.name}
          layout="intrinsic"
          className="rounded-[16px]"
          height={150}
          width={200}
        />
      </figure>
      <div>
        <h2>{eventCardData.name}</h2>

        <div>
          <Image src={dateIcon} alt="date" height={20} width={20} />
          <div>
            <span>{eventCardData.dateTime.date}</span>
            <span>{eventCardData.dateTime.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExploreEventCard;
