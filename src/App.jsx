import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PersonajesTable from './components/PersonajesComponent/PersonajesTable';
import PersonajesForm from './components/PersonajesComponent/PersonajesForm';
import CompeForm from './components/CompeComponent/CompeForm';
import CompeTable from './components/CompeComponent/CompeTable';


function App() {
 const [personajes, setPersonajes] = useState([]);
 const [editingPersonaje, setEditingPersonaje] = useState(null);

 const [competencias, setCompetencias] = useState([]);
 const [editingCompetencia, setEditingCompetencia] = useState(null);
 

 //PersonajeFunctions

 //Actualizar la lista de personajes por cada personaje nuevo
 useEffect(()=>{
  fetchPersonajes();
 },[]);

 //Crear o actualizar un personaje
 const handleCreateOrUpdatePersonajes = async (PersonajeData) => {
  if (editingPersonaje) {
    await axios.put(`http://localhost:8080/api/personajes/${editingPersonaje.id}`, PersonajeData);
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
  const handleDeletePersonaje = async(id)=>{
    try{
      await axios.delete(`http://localhost:8080/api/personajes/${id}`)
      fetchPersonajes()
    } catch (error) {
      console.error(error)
      alert("Ocurrio un error al eliminar el personaje")
    }
  };

  //Compe Functions

  //Actualizar la lista de competencias por una nueva
  useEffect(()=>{
    fetchCompes();
    },[]);

    //Crear o actualizar una competencia
    const handleCreateOrUpdateCompetencia = async (CompetenciaData) => {
      if (editingCompetencia) {
        await axios.put(`http://localhost:8080/api/competencias/${editingCompetencia.id}`, CompetenciaData);
        } else {
          await axios.post(`http://localhost:8080/api/competencias`, CompetenciaData);
          }
          };

    //Recorrer la lista de competencias y retornarlas como respuesta
    const fetchCompes = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/competencias/${id}`)
        setCompetencias(response.data);
        } catch (error) {
          console.log('Error al consultar las competencias: ' , error);
          }
        };

    //Editar una competencia
    const handleEditCompetencia = (Competencia) => {
      setEditingCompetencia(Competencia);
      };
    
    //Eliminar una competencia con el ID
    const handleDeleteCompetencia = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/api/competencias/${id}`);
        fetchCompes();
        } catch (error) {
          console.log('Error al eliminar la competencia: ' , error);
          }
          };

  return (
    <div className='App'>
      <h1>Api Baki🥊🥋</h1>
      <br/>
      <h2>List Personajes💪</h2>
      <PersonajesTable personajes={personajes} onEdit={handleEditPersonaje} onDelete={handleDeletePersonaje} />
      <h2>{editingPersonaje ? 'editar personaje' : 'crear personaje'}</h2>
      <PersonajesForm onSubmit={handleCreateOrUpdatePersonajes} initialPersonaje={editingPersonaje} />
      <br/>
      <h2>List Competencias🥊</h2>
      <CompeTable competencias={competencias} onEdit={handleEditCompetencia} onDelete={handleDeleteCompetencia} />
      <h2>{editingCompetencia ? 'editar competencia' : 'crear competencia'}</h2>
      <CompeForm onSubmit={handleCreateOrUpdateCompetencia} initialCompetencia={editingCompetencia} />
    </div>
  );
}
export default App;
