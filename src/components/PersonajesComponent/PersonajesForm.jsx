import{useState} from "react";
function PersonajesForm(onSubmit){
   
    const [names, setNames] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeigth] = useState('');
    const [origin, setOrigin] = useState('');
    const [power, setPower] = useState('');
    const[classification, setClassification] = useState('');

    const handleNamesChange = (event) =>{
        setNames(event.target.value)
    };
    const handleAgeChange = (event) =>{
        setAge(event.target.value)
    };
    const handleGenderChange = (event) =>{
        setGender(event.target.value)
    };
    const handleHeightChange = (event) =>{
        setHeigth(event.target.value)
    };
    const handleOriginChange = (event) =>{
        setOrigin(event.target.value)
    };
    const handlePowerChange = (event) =>{
        setPower(event.target.value)
    };
    const handleClassificationChange = (event) =>{
        setClassification(event.target.value)
    };

    //Funcion para enviar el formulario

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({names, age, gender, height, origin,power, classification})
        setNames('')
        setAge('')
        setGender('')
        setHeigth('')
        setOrigin('')
        setPower('')
        setClassification('')
    };
    return(
        <form onSubmit = {handleSubmit}>
            <input type = "text"  placeholder ="Names" value ={names} onChange={handleNamesChange} required/>
            <input type = "text"  placeholder ="Age" value ={age} onChange={handleAgeChange} required/>
            <input type = "text"  placeholder ="Gender" value ={gender} onChange={handleGenderChange} required/>
            <input type = "text"  placeholder ="Heigth" value ={height} onChange={handleHeightChange} required/>
            <input type = "text"  placeholder ="Origin" value ={origin} onChange={handleOriginChange} required/>
            <input type = "text"  placeholder ="Power" value ={power} onChange={handlePowerChange} required/>
            <input type = "text"  placeholder ="Classification" value ={classification} onChange={handleClassificationChange} required/>
            <button type="Submit">Save</button>
        </form>
    );
}
export default PersonajesForm;