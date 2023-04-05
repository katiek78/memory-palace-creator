import { useJourneys } from "./JourneyListContext";

const JourneyList : React.FC = () => {
    const {journeys, setJourneys} = useJourneys();
return(
<>
    <h2>My Journeys</h2>    
    {journeys.length > 0 && 
    <p>You have {journeys.length} journey{journeys.length > 1 && 's'}.</p>}
    {journeys.map(journey => 
        <>
        <h3>{journey.name}</h3>
        {journey.points.map(point => <>
            <h4>{point.name}</h4>
        </>)}
        </>
        )}
    {journeys.length === 0 && 
    <p>You have not created any journeys yet.</p>
    }
    <button>New journey</button>
</>
)
}
export default JourneyList;