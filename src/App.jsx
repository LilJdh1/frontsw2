import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PersonajesTable from './components/PersonajesComponent/PersonajesTable';
import PersonajesForm from './components/PersonajesComponent/PersonajesForm';

function App() {
 const [personajes, setPersonajes] = useState([]);
 const [editingPersonaje, setEditingPersonaje] = useState(null);
 

 //Actualizar la lista de personajes por cada personaje nuevo
 useEffect(()=>{
  fetchPersonajes();
 },[]);

 //Crear o actualizar un personaje
 const handleCreateOrUpdatePersonajes = async (PersonajeData) => {
  if (editingPersonaje) {
    await axios.put(`http://localhost:8080/api/personajes${editingPersonaje.id}`, PersonajeData);
  } else {
    await axios.post(`http://localhost:8080/api/personajes`, PersonajeData);
  }
};

 //Recorrer la lista de personajes y retornarlos como respuesta
 const fetchPersonajes = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/personajes');
    setPersonajes(response.data);
  } catch (error) {
    console.log('Error al consultar los personajes: ' , error);
  }
 };  

 

 //Editar un personaje
 const handleEditPersonaje = (Personaje) =>{
    setEditingPersonaje(Personaje)
  };
 
  //Eliminar un personaje con el ID
  const handleDeletePersonaje = async(personajeId)=>{
  await axios.delete(`http://localhost:8080/api/personajes/${personajeId}`)
  fetchPersonajes()
  };

  return (
    <div className='App'>
      <h1>Api Baki🥊🥋</h1>
      <br/>
      <h2>List Personajes💪</h2>
      <PersonajesTable personajes={personajes} onEdit={handleEditPersonaje} onDelete={handleDeletePersonaje} />
      <h2>{editingPersonaje ? 'editar personaje' : 'crear personaje'}</h2>
      <PersonajesForm onSubmit={handleCreateOrUpdatePersonajes} initialPersonaje={editingPersonaje} />
    </div>
  );
}
export default App;
