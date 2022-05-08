<!-- import { useState } from 'react';
import axios from 'axios';

function ArtistForm({refreshArtists}) {
  const [artist, setArtist] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

  console.log('Adding an artist', {artist});

  axios({
    method: 'POST', 
    url: '/artist',
    data: {
      name: artist
    }
  })
  .then(() => {
    console.log('POST /artist works, my guy!');

    refreshArtists();
  })
  .catch(error => {
    console.error('POST /artist no worky, bub', error);
  });
};  


return (
  <section>
      <h2>Add Artist</h2>
      <form onSubmit={handleSubmit} className="add-artist-form">
        <input 
          required 
          placeholder="Artist" 
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />

        <button type="submit">
          Add Artist
        </button>
      </form>
    </section>

  );
}

export default ArtistForm; -->
