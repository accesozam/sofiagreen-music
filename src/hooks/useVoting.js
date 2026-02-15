// src/hooks/useVoting.js
import { useState, useEffect } from 'react';

export const useVoting = (songId) => {
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simular IP del usuario (en producción usarías una API real)
  const getUserIP = () => {
    // En desarrollo, usamos un ID único del navegador
    let userIP = localStorage.getItem('user_ip');
    if (!userIP) {
      userIP = 'user_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('user_ip', userIP);
    }
    return userIP;
  };

  // Cargar votos desde localStorage
  useEffect(() => {
    const loadVotes = () => {
      const allVotes = JSON.parse(localStorage.getItem('song_votes') || '{}');
      const songVotes = allVotes[songId] || { count: 0, voters: [] };
      
      const userIP = getUserIP();
      const hasUserVoted = songVotes.voters.includes(userIP);
      
      setVotes(songVotes.count);
      setHasVoted(hasUserVoted);
      setIsLoading(false);
    };
    
    loadVotes();
  }, [songId]);

  const toggleVote = () => {
    const userIP = getUserIP();
    const allVotes = JSON.parse(localStorage.getItem('song_votes') || '{}');
    
    if (!allVotes[songId]) {
      allVotes[songId] = { count: 0, voters: [] };
    }

    const songVotes = allVotes[songId];
    
    if (hasVoted) {
      // Quitar voto
      songVotes.count = Math.max(0, songVotes.count - 1);
      songVotes.voters = songVotes.voters.filter(ip => ip !== userIP);
      setHasVoted(false);
    } else {
      // Agregar voto
      songVotes.count += 1;
      songVotes.voters.push(userIP);
      setHasVoted(true);
    }
    
    setVotes(songVotes.count);
    localStorage.setItem('song_votes', JSON.stringify(allVotes));
  };

  return {
    votes,
    hasVoted,
    isLoading,
    toggleVote
  };
};
