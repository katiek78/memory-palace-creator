import { useState, useEffect, FormEvent } from "react";
import { useParams, useNavigate } from "react-router";
import { config } from '../config/constants';
const URL = config.url;
 
export default function Edit() {
 const [form, setForm] = useState({
   name: ""
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     let id = params.id?.toString();
     if (!id) {
       window.alert(`Invalid ID supplied`);
       navigate("/");
       return;
     }
     const response = await fetch(`${URL}/journey/${id}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value: {name: string}) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e: FormEvent<HTMLFormElement>) {
   e.preventDefault();
   const editedJourney = {
     name: form.name,    
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`${URL}/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedJourney),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Journey</h3>
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
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update journey"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}