// import { API_KEY } from "../../config/config";
import JourneyList from "../Journey/JourneyList";

const Home : React.FC = () => {

    
    return(
        <>
        {/* <iframe title="pano1" width="600" height="450" style={{border:0}} loading="lazy" allowFullScreen
src={`https://www.google.com/maps/embed/v1/streetview?location=40.4935%2C-3.8758&key=${API_KEY}`}></iframe>

<iframe title="pano2" width="600" height="450" style={{border:0}} loading="lazy" allowFullScreen
src={`https://www.google.com/maps/embed/v1/streetview?location=46.414382,10.013988&key=${API_KEY}`}></iframe> */}
        <JourneyList />
        </>
    )
}
export default Home;

/*
TODOs:
Allow user to add and name a journey
Allow user to view a list of their journeys
Allow a user to view the journey points in a journey

Allow user to use an embed code from Google Maps to add a street view
Allow user to type an address or landmark and get a street view (need Geocoding API)
Allow user to upload an image as a journey scene

Allow user to delete a journey
Allow user to delete a journey point

Nice styling
Intro text

*/