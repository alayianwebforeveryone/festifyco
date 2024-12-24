import ExploreEventCard from "./ExploreEventCard"
import {eventCardData} from "../../json/event.js"

const ExploreEvent = ()=>{
    return(
        <div>
            { eventCardData.map((eventCard, index) =>{
                console.log(eventCard)
                return (

                    <ExploreEventCard eventCardData = {eventCard} key = {index} />
                )
            })
            }
        </div>
    )
}
export default ExploreEvent