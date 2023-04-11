import { useLocation } from "react-router-dom";
import EmbedStreetView from "./EmbedStreetView";

const ViewPoint: React.FC = () => {
  const location = useLocation();
  const { journeyName, pointPos, point } = location.state;

  return (
    <>
      <h2>
        {journeyName} - point {pointPos + 1}
      </h2>
      <h3>{point.name}</h3>
      <EmbedStreetView width={600} height={450} point={point} />
    </>
    /*
Todo:
Allow user to enter address rather than URL/coords
Allow user to change heading etc. of a street view and confirm when correct
*/
  );
};

export default ViewPoint;
