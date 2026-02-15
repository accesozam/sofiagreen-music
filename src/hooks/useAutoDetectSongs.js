// src/hooks/useAutoDetectSongs.js
import { useState, useEffect } from 'react';
import songsConfig from '../data/songs.js';

export const useAutoDetectSongs = () => {
  const [songs, setSongs] = useState(songsConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectAvailableSongs = async () => {
      const availableSongs = [];

      for (const song of songsConfig) {
        try {
          // Verificar si el archivo de audio existe
          const response = await fetch(song.audioFile, { method: 'HEAD' });
          if (response.ok) {
            availableSongs.push(song);
          }
        } catch (error) {
          console.log(`Canción "${song.title}" no disponible aún`);
        }
      }

      setSongs(availableSongs);
      setLoading(false);
    };

    detectAvailableSongs();
  }, []);

  return { songs, loading, totalSongs: songs.length };
};
