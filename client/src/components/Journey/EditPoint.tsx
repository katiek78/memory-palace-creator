import { useState, useEffect, FormEvent } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { JourneyPoint } from "../../types/Journey";
import LocationExplanation from "./LocationExplanation";
import { validateLocation } from "../../validation/validateLocation";

export default function EditPoint() {
 const [form, setForm] = useState({
   name: "",
   location: ""
 });
 const location = useLocation();
 const { journeyId } = location.state;
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     let id = params.id?.toString();
     if (!id) {
       window.alert(`Invalid ID supplied`);
       navigate(`/view/${journeyId}`);
       return;
     }
     const response = await fetch(`http://localhost:5000/point/${id}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Point with id ${id} not found`);
       navigate(`/view/${journeyId}`);
       return;
     }
         
     const point = record.points.filter((el: JourneyPoint) => el._id === id)[0];    
     setForm(point);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value: any) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e: FormEvent<HTMLFormElement>) {
   e.preventDefault();
   const editedPoint = {
     name: form.name,
     location: form.location    
   };
   editedPoint.location = validateLocation(editedPoint.location);
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/point/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPoint),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate(`/view/${journeyId}`);
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Point</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="location">Location: </label>
         <input
           type="text"
           className="form-control"
           id="location"
           value={form.location}
           onChange={(e) => updateForm({ location: e.target.value })}
         />
         <LocationExplanation />
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update point"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}