import Image from "next/image"
import dateIcon from "../../../Assets/icons/date.svg"

const ExploreEventCard = ({eventCard , key})=>{
    // const [date, time] = eventCard..split("T");
    // console.log(date, time)
    return(
        <div 
        key={key}
        >
            <figure>
                {/* <Image src = {eventCard.Image} alt = {eventCard.name} /> */}
            </figure>
            <div>
                <div>
                    {/* <h2>{eventCard.name}</h2> */}
                </div>
                <div>
                    <Image src={dateIcon} alt = "date"  />
                    {/* <span>{eventCard.dateTime.Spl}</span> */}
                </div>
            </div>
        </div>
    )
}
export default ExploreEventCard