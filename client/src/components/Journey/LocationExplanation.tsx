import locationExplanation from "../../assets/location-explanation.png";

const LocationExplanation : React.FC = () => {
    return(
    <details>
        <summary>What should go here?</summary>
    <p className='location__explanation'>Copy the co-ordinates from the address bar on Google Maps or you can simply paste the whole URL!</p>
    <img alt="screenshot of part of a Google Street View URL with a red box around the co-ordinates" src={locationExplanation}></img>
    </details>
    );
}

export default LocationExplanation;