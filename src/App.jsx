import React, { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [respuesta, setRespuesta] = useState(null); // Estado para almacenar la respuesta

  const API_AGIFY_ENDPOINT = `https://api.agify.io/?name=${search}`;

  function getSearch() {
    if (search === '') return null;

    fetch(API_AGIFY_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const age = data.age; // Obtén la edad de la respuesta
        console.log(age);
        setRespuesta(age); // Actualiza el estado con la edad
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getSearch();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      <p>
        {respuesta !== null ? `La edad estimada es ${respuesta}` : ''}
      </p>
    </>
  );
}

export default App;
