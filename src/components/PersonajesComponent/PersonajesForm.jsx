import{useState} from "react";
function PersonajesForm({ onSubmit }) {
    const [personaje, setPersonaje] = useState({
      names: '',
      age: '',
      gender: '',
      height: '',
      origin: '',
      power: '',
      classification: '',
    });
  
    const handleInputChange = (event) => {
      setPersonaje({
        ...personaje,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(personaje);
  
      setPersonaje({
        names: '',
        age: '',
        gender: '',
        height: '',
        origin: '',
        power: '',
        classification: '',
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Names"
          name="names"
          value={personaje.names}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={personaje.age}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={personaje.gender}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Heigth"
          name="height"
          value={personaje.height}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Origin"
          name="origin"
          value={personaje.origin}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Power"
          name="power"
          value={personaje.power}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Classification"
          name="classification"
          value={personaje.classification}
          onChange={handleInputChange}
          required
        />
        <button type="Submit">Save</button>
      </form>
    );
  }
export default PersonajesForm;