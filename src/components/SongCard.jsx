// src/components/SongCard.jsx
import React from 'react';
import { Play, Pause, Download, Heart } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useVoting } from '../hooks/useVoting';
import '../styles/SongCard.css';

const SongCard = ({ song }) => {
  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    seek,
    formatTime
  } = useAudioPlayer();

  const { votes, hasVoted, toggleVote } = useVoting(song.id);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = song.audioFile;
    link.download = `${song.title}-${song.year}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="song-card"
      style={{ '--card-color': song.color }}
    >
      <audio ref={audioRef} src={song.audioFile} preload="metadata" />
      
      <div className="card-glow"></div>
      
      <div className="card-header">
        <div className="genre-badge">{song.genre}</div>
        <div className="card-actions">
          <button 
            className={`vote-btn ${hasVoted ? 'voted' : ''}`}
            onClick={toggleVote}
            title={hasVoted ? 'Quitar voto' : 'Votar por esta canción'}
          >
            <Heart size={18} fill={hasVoted ? 'currentColor' : 'none'} />
            <span className="vote-count">{votes}</span>
          </button>
          <button className="download-btn" onClick={handleDownload} title="Descargar">
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="card-content">
        <div className="album-art">
          <div className="art-placeholder">
            <div className="equalizer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="song-info">
          <h3 className="song-title">{song.title}</h3>
          <p className="song-artist">{song.artist}</p>
          <p className="song-year">{song.year}</p>
        </div>
      </div>

      <div className="player-controls">
        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <div className="progress-section">
          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={(e) => seek(Number(e.target.value))}
              className="progress-input"
            />
          </div>
        </div>
      </div>

      <div className="card-stats">
        <div className="stat">
          <span className="stat-label">Duration</span>
          <span className="stat-value">{song.duration}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Released</span>
          <span className="stat-value">{new Date(song.releaseDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}</span>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
