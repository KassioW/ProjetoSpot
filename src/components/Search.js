import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import artistsData from '../data/artists.json';
import '../styles/main-content.css';

const Search = ({ searchTerm }) => {
  const [artists, setArtists] = useState([]);
  const [showPlaylists, setShowPlaylists] = useState(true);

  useEffect(() => {
    if (searchTerm === '') {
      setShowPlaylists(true);
      setArtists([]);
      return;
    }

    const filteredArtists = artistsData.artists.filter(artist =>
      artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setArtists(filteredArtists);
    setShowPlaylists(false);
  }, [searchTerm]);

  return (
    <>
      {showPlaylists ? (
        <div id="result-playlists">
          {/* Sua lista de playlists existente */}
        </div>
      ) : (
        <div id="result-artist">
          <div className="grid-container">
            {artists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;