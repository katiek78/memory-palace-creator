import { useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router";
import LocationExplanation from "./LocationExplanation";
import { validateLocation } from "../../validation/validateLocation";
 
export default function CreatePoint() {
    const [form, setForm] = useState({
      name: "",
      location: ""
    });

    const params = useParams();
    const navigate = useNavigate();
 
    // These methods will update the state properties.
    function updateForm(value: any) {
      //if (value.hasOwnProperty('location')) value.location = validateLocation(form.location);
      return setForm((prev) => {
        return { ...prev, ...value };
      });
    }
  
      // This function will handle the submission.
 async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPoint = { ...form };
    newPoint.location = validateLocation(newPoint.location);

    let id = params.id?.toString();
     if (!id) {
       window.alert(`Invalid ID supplied`);
       navigate("/");
       return;
     }
  
    await fetch(`http://localhost:5000/point/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPoint),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", location: "" });
    navigate(`/view/${id}`);
  }
  
  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>New Point</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />          
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.location}
            onChange={(e) => updateForm({ location: e.target.value })}
          />
          <LocationExplanation />
        </div>
        {/* <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Intern"
              checked={form.level === "Intern"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionIntern" className="form-check-label">Intern</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionJunior"
              value="Junior"
              checked={form.level === "Junior"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionJunior" className="form-check-label">Junior</label>
          </div>
          <div className="form-check form-check-inline"> */}
            {/* <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionSenior"
              value="Senior"
              checked={form.level === "Senior"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionSenior" className="form-check-label">Senior</label>
          </div>
        </div> */}
        <div className="form-group">
          <input
            type="submit"
            value="Create point"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
 }