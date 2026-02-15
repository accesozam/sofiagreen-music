// src/data/songs.js
// Configuración de canciones - Se auto-detectan las disponibles

export const songs = [
  {
    id: 1,
    title: "Mantra",
    year: "2026",
    artist: "Sofia Green",
    duration: "3:45",
    audioFile: "/assets/audio/mantra-2026.mp3",
    coverImage: "/assets/covers/mantra-cover.jpg",
    color: "#00ffff",
    genre: "Electronic",
    releaseDate: "2026-02-14"
  },
  {
    id: 2,
    title: "Starlight Dreams",
    year: "2026",
    artist: "Sofia Green",
    duration: "4:20",
    audioFile: "/assets/audio/starlight-dreams.mp3",
    coverImage: "/assets/covers/starlight-cover.jpg",
    color: "#ff00ff",
    genre: "Synthwave",
    releaseDate: "2026-02-20"
  },
  {
    id: 3,
    title: "Neon Pulse",
    year: "2026",
    artist: "Sofia Green",
    duration: "3:30",
    audioFile: "/assets/audio/neon-pulse.mp3",
    coverImage: "/assets/covers/neon-cover.jpg",
    color: "#00ff88",
    genre: "Electronic",
    releaseDate: "2026-03-01"
  },
  // Agrega más canciones aquí - solo se mostrarán las que tengan archivo
  // {
  //   id: 4,
  //   title: "Tu Canción",
  //   year: "2026",
  //   artist: "Sofia Green",
  //   duration: "3:00",
  //   audioFile: "/assets/audio/tu-cancion.mp3",
  //   coverImage: "/assets/covers/tu-cover.jpg",
  //   color: "#ffff00",
  //   genre: "Pop",
  //   releaseDate: "2026-03-15"
  // }
];

export default songs;
