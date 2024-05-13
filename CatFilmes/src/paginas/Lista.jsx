import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../Componentes/Card';
import estilos from './Lista.module.css'
import { Modal } from '../Componentes/Modal';

const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Lista() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    axios
      .get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((response) => {
        console.log('Atributos possíveis do filme:', Object.keys(response.data.results[0]));
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  }

  return (   
    <>
      <figure style={{ display: 'flex', flexWrap: 'wrap'} }>
        {movies.map((movie) => (
          <Card 
            key={movie.id}
            movie={movie}
            onOpenModal={handleOpenModal}
          />
        ))}
      </figure>        
      {selectedMovie && (
        <Modal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </>
  );
}
