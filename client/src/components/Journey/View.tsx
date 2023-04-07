import { useState, useEffect } from "react";
import { useParams , useNavigate, Link} from "react-router-dom";
import { Journey } from "../../types/Journey";
import { JourneyPoint } from "../../types/Journey";

interface PointProps {
    point: JourneyPoint;
    deletePoint: (id: string) => void;
}

const PointComponent = (props: PointProps) => (
    <tr>
      <td>{props.point.name}</td>
      <td>
        <Link className="btn btn-link" to={`/view/${props.point._id}`}>View</Link> |
        <Link className="btn btn-link" to={`/edit/${props.point._id}`}>Edit name</Link> |
        <button className="btn btn-link"
          onClick={() => {
            props.deletePoint(props.point._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
   );
   

const View : React.FC = () => {

    const [journey, setJourney] = useState<Journey>({name:'', _id:'', points: []});
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate();
 

     //This method fetches the records from the database.
    useEffect(() => {
    async function getJourney() {        
        let id = params.id?.toString();
        if (!id) {
          window.alert(`Invalid ID supplied`);
          navigate("/");
          return;
        }    
        const response = await fetch(`http://localhost:5000/journey/${id}`);
    
        if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
        }
    
        const journey = await response.json();
        setIsLoading(false);
        setJourney(journey);        
    }
    
    getJourney();
    
    return;
    }, [journey.points]); //if we have journey.points?.length in here, it doesn't re-render when we delete a point
    //if we just put journey or even journey.points in here then it works but it's constantly 'loading'


    //This method deletes a point
    async function deletePoint(id: string) {        
        await fetch(`http://localhost:5000/delete/${journey._id}/${id}`, {
          method: "DELETE"
        });
      
        const newJourney = {...journey, points: journey.points?.filter((el) => el._id !== id)};
        setJourney(newJourney);
      }

 // This method will map out the points in the journey
 function pointList() {
    return journey.points?.map((point) => {
      return (
        <PointComponent
          point={point}
          deletePoint={() => deletePoint(point._id)}
          key={point._id}
        />
      );
    });
  }

return(
    <div>
    <h3>View Journey</h3>
    {journey.points?.length && journey.points.length > 0 && 
    <p>This journey has {journey.points.length} point{journey.points.length > 1 && 's'}.</p>}    
    {journey.points?.length && journey.points.length === 0 && !isLoading &&
    <p>You have not created any points yet.</p>
    }
    {isLoading &&
    <p>Loading...</p>
    }
    {/* <button>New journey</button> */}
    <p>{pointList()}</p>
    <Link className="btn btn-link" to={`/createPoint/${journey._id}`}>Add point</Link>
    </div>
);

}

export default View;