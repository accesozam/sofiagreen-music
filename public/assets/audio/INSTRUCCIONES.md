# 🎵 CÓMO AGREGAR CANCIONES

## Sistema Automático de Detección

Este proyecto detecta automáticamente las canciones que agregas. Solo necesitas:

### 1️⃣ Copiar el archivo MP3 aquí

Ejemplo:
- `mantra-2026.mp3` ← Tu primera canción
- `starlight-dreams.mp3` ← Segunda canción  
- `neon-pulse.mp3` ← Tercera canción
- `tu-nueva-cancion.mp3` ← Se detectará automáticamente

### 2️⃣ Configurar en src/data/songs.js

```javascript
{
  id: 4,
  title: "Tu Nueva Canción",
  year: "2026",
  artist: "Sofia Green",
  duration: "3:15",
  audioFile: "/assets/audio/tu-nueva-cancion.mp3",
  coverImage: "/assets/covers/tu-cover.jpg",
  color: "#ffff00",
  genre: "Pop",
  releaseDate: "2026-03-15"
}
```

### 3️⃣ ¡Listo!

El sistema detectará automáticamente que el archivo existe y lo mostrará en la web.

**Si el archivo NO existe, la canción NO se mostrará.**

## ✨ Características

- ✅ Auto-detección de archivos disponibles
- ✅ Contador total de canciones
- ✅ Sistema de votación (1 voto por IP)
- ✅ Descarga gratuita

## 🎨 Colores Recomendados

- `#00ffff` - Cyan (Electronic)
- `#ff00ff` - Magenta (Synthwave)
- `#00ff88` - Verde agua (Chill)
- `#ffff00` - Amarillo (Pop)
- `#ff6b00` - Naranja (Dance)
- `#9d00ff` - Púrpura (Trap)
