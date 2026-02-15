// src/App.jsx
import React from 'react';
import Header from './components/Header';
import SongCard from './components/SongCard';
import { useAutoDetectSongs } from './hooks/useAutoDetectSongs';
import './styles/App.css';

function App() {
  const { songs, loading, totalSongs } = useAutoDetectSongs();

  return (
    <div className="app">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">LATEST TRACKS</h2>
            <div className="track-count">
              {loading ? (
                <span className="loading-text">Cargando...</span>
              ) : (
                <>
                  {totalSongs} {totalSongs === 1 ? 'Track' : 'Tracks'} Disponibles
                </>
              )}
            </div>
          </div>
          
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Detectando canciones disponibles...</p>
            </div>
          ) : songs.length === 0 ? (
            <div className="empty-state">
              <h3>No hay canciones disponibles</h3>
              <p>Agrega archivos MP3 a la carpeta public/assets/audio/</p>
            </div>
          ) : (
            <div className="songs-grid">
              {songs.map(song => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <footer className="footer">
        <p>&copy; 2026 Sofia Green Music. All rights reserved.</p>
        <p className="footer-subtitle">
          {totalSongs > 0 && `${totalSongs} canciones disponibles • `}
          Designed for the future
        </p>
      </footer>
    </div>
  );
}

export default App;
