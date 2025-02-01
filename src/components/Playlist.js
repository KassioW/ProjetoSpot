import React from 'react';
import '../styles/main-content.css';

// Importando as imagens
import playlist1 from '../assets/playlist/1.jpeg';
import playlist2 from '../assets/playlist/2.png';
import playlist3 from '../assets/playlist/3.jpeg';
import playlist4 from '../assets/playlist/4.jpeg';
import playlist5 from '../assets/playlist/5.jpeg';
import playlist6 from '../assets/playlist/6.jpeg';
import playlist7 from '../assets/playlist/7.jpeg';
import playlist8 from '../assets/playlist/8.jpeg';
import playlist9 from '../assets/playlist/9.jpeg';
import playlist10 from '../assets/playlist/10.jpeg';
import playlist11 from '../assets/playlist/11.jpeg';
import playlist12 from '../assets/playlist/12.jpeg';
import playlist13 from '../assets/playlist/13.jpeg';
import playlist14 from '../assets/playlist/14.jpeg';
import playlist15 from '../assets/playlist/15.jpeg';

const Playlist = () => {
  const playlists = [
    { id: 1, title: 'Boas festas', image: playlist1 },
    { id: 2, title: 'Feitos para você', image: playlist2 },
    { id: 3, title: 'Lançamentos', image: playlist3 },
    { id: 4, title: 'Creators', image: playlist4 },
    { id: 5, title: 'Para treinar', image: playlist5 },
    { id: 6, title: 'Podcasts', image: playlist6 },
    { id: 7, title: 'Sertanejo', image: playlist7 },
    { id: 8, title: 'Samba e pagode', image: playlist8 },
    { id: 9, title: 'Funk', image: playlist9 },
    { id: 10, title: 'MPB', image: playlist10 },
    { id: 11, title: 'Rock', image: playlist11 },
    { id: 12, title: 'Hip Hop', image: playlist12 },
    { id: 13, title: 'Indie', image: playlist13 },
    { id: 14, title: 'Relax', image: playlist14 },
    { id: 15, title: 'Música Latina', image: playlist15 },
  ];


  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting">Boas vindas</h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>
        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              {playlists.map((playlist) => (
                <a href="/" className="cards" key={playlist.id}>
                  <div className={`cards card${playlist.id}`}>
                  <img src={playlist.image} alt={playlist.title} />

                    <span>{playlist.title}</span>
                  </div>
                </a>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;