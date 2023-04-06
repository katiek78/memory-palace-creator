import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Journey } from "../../types/Journey";

interface JourneyProps {
    journey: Journey;
    deleteJourney: (id: string) => void;
}

const JourneyComponent = (props: JourneyProps) => (
 <tr>
   <td>{props.journey.name}</td>
   <td>
     <Link className="btn btn-link" to={`/view/${props.journey._id}`}>View</Link> |
     <Link className="btn btn-link" to={`/edit/${props.journey._id}`}>Edit name</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteJourney(props.journey._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);

const JourneyList : React.FC = () => {
    //const {journeys, setJourneys} = useJourneys();
    const [journeys, setJourneys] = useState<Journey[]>([]);
    const [isLoading, setIsLoading] = useState(false);

     //This method fetches the records from the database.
    useEffect(() => {
    async function getJourneys() {
        setIsLoading(true);        
        const response = await fetch(`http://localhost:5000/journey/`);
    
        if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
        }
    
        const journeys = await response.json();
        setIsLoading(false);
        setJourneys(journeys);
    }
    
    getJourneys();
    
    return;
    }, [journeys.length]);
    

    //This method deletes a journey
     async function deleteJourney(id: string) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newJourneys = journeys.filter((el) => el._id !== id);
   setJourneys(newJourneys);
 }
 
 // This method will map out the records on the table
 function journeyList() {
   return journeys.map((journey) => {
     return (
       <JourneyComponent
         journey={journey}
         deleteJourney={() => deleteJourney(journey._id)}
         key={journey._id}
       />
     );
   });
 }

return(
<>
    <h2>My Journeys</h2>    
    {journeys.length > 0 && 
    <p>You have {journeys.length} journey{journeys.length > 1 && 's'}.</p>}    
    {journeys.length === 0 && !isLoading &&
    <p>You have not created any journeys yet.</p>
    }
    {isLoading &&
    <p>Loading...</p>
    }
    {/* <button>New journey</button> */}
    <p>{journeyList()}</p>
</>
)
}
export default JourneyList;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
 
// const Record = (props) => (
//  <tr>
//    <td>{props.record.name}</td>
//    <td>{props.record.position}</td>
//    <td>{props.record.level}</td>
//    <td>
//      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
//      <button className="btn btn-link"
//        onClick={() => {
//          props.deleteRecord(props.record._id);
//        }}
//      >
//        Delete
//      </button>
//    </td>
//  </tr>
// );
 
// export default function RecordList() {
//  const [records, setRecords] = useState([]);
 
//  // This method fetches the records from the database.
//  useEffect(() => {
//    async function getRecords() {
//      const response = await fetch(`http://localhost:5000/record/`);
 
//      if (!response.ok) {
//        const message = `An error occurred: ${response.statusText}`;
//        window.alert(message);
//        return;
//      }
 
//      const records = await response.json();
//      setRecords(records);
//    }
 
//    getRecords();
 
//    return;
//  }, [records.length]);
 
//  // This method will delete a record
//  async function deleteRecord(id) {
//    await fetch(`http://localhost:5000/${id}`, {
//      method: "DELETE"
//    });
 
//    const newRecords = records.filter((el) => el._id !== id);
//    setRecords(newRecords);
//  }
 
//  // This method will map out the records on the table
//  function recordList() {
//    return records.map((record) => {
//      return (
//        <Record
//          record={record}
//          deleteRecord={() => deleteRecord(record._id)}
//          key={record._id}
//        />
//      );
//    });
//  }
 
//  // This following section will display the table with the records of individuals.
//  return (
//    <div>
//      <h3>Record List</h3>
//      <table className="table table-striped" style={{ marginTop: 20 }}>
//        <thead>
//          <tr>
//            <th>Name</th>
//            <th>Position</th>
//            <th>Level</th>
//            <th>Action</th>
//          </tr>
//        </thead>
//        <tbody>{recordList()}</tbody>
//      </table>
//    </div>
//  );
// }