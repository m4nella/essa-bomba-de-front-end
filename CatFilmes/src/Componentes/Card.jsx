import React from 'react';
import estilos from './Card.module.css';


export function Card({ movie, onOpenModal }) {
  return (
    <div className={estilos.conteiner}>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}      
        onClick={() => onOpenModal(movie)}
      />
    </div>
  );
}
