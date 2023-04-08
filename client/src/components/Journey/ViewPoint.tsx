import { useLocation } from "react-router-dom";
import { API_KEY } from "../../config/config";

const ViewPoint : React.FC = () => {
    const location = useLocation();
    const { journeyName, pointPos, point } = location.state;

    return(
    <>
    <h2>{journeyName} - point {pointPos + 1}</h2>
    <h3>{point.name}</h3>
    {/* <iframe title="pano1" width="600" height="450" style={{border:0}} loading="lazy" allowFullScreen
src={`https://www.google.com/maps/embed/v1/streetview?location=40.4935%2C-3.8758&key=${API_KEY}`}></iframe>

<iframe src="https://www.google.com/maps/embed?pb=!4v1680940263879!6m8!1m7!1soy1SY7CqBCV2O7YXxYXJ_g!2m2!1d50.84821197400399!2d4.354395678852085!3f31.77502246292412!4f-8.46737987149018!5f0.7820865974627469" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

<iframe
  width="600"
  height="450"
  style={{border:0}}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/streetview?key=${API_KEY}
    &location=${point.location}`}>
</iframe>
</>
/*
Todo:
Allow user to enter either embed link or address (or coordinates)
Allow user to change heading etc. of a street view and confirm when correct
*/
    );

}

export default ViewPoint;