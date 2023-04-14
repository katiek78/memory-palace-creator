import { JourneyPoint } from "../../types/Journey";
//import { API_KEY } from "../../config/config";
const API_KEY = process.env.API_KEY;

interface EmbedStreetViewProps {
    width: number;
    height: number;
    point: JourneyPoint;


}

const EmbedStreetView : React.FC<EmbedStreetViewProps> = ({width, height, point}) => {


    return(
        <iframe
        width={width}
        height={height}
        style={{border:0, padding:'10px'}}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/streetview?key=${API_KEY}
          &location=${point.location}`}>
      </iframe>
    );
}

export default EmbedStreetView;