import React from 'react';
import '../styles/main-content.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <div className="card-img">
        <img 
          className="artist-img" 
          src={artist.urlImg} 
          alt={artist.name} 
        />
        <div className="play">
        <i className="fa-solid fa-play"></i>
        </div>
      </div>
      <div className="card-text">
        <span className="artist-name">{artist.name}</span>
        <span className="artist-categorie">{artist.genre}</span>
      </div>
    </div>
  );
};

export default ArtistCard;