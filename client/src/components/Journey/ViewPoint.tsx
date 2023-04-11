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
      {/* <iframe src="https://www.google.com/maps/embed?pb=!4v1680940263879!6m8!1m7!1soy1SY7CqBCV2O7YXxYXJ_g!2m2!1d50.84821197400399!2d4.354395678852085!3f31.77502246292412!4f-8.46737987149018!5f0.7820865974627469" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

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
