import { API_KEY } from "../../config/config";

const Home : React.FC = () => {

    
    return(
        <>
        <iframe width="600" height="450" style={{border:0}} loading="lazy" allowFullScreen
src={`https://www.google.com/maps/embed/v1/streetview?location=53.3967,-2.3193&key=${API_KEY}`}></iframe>
        </>
    )
}
export default Home;