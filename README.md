# 🎵 Sofia Green Music - Plataforma Musical Futurista

## ✨ NUEVAS CARACTERÍSTICAS

### 🆕 Sistema de Votación
- ❤️ Botón de corazón en cada canción
- 🔒 1 voto por IP/usuario
- 📊 Contador de votos en tiempo real
- ✨ Animación al votar

### 🤖 Auto-Detección de Canciones
- 📁 Agrega MP3 a la carpeta → Se detecta automáticamente
- 📈 Contador dinámico de canciones disponibles
- 🚀 No necesitas recompilar el proyecto

---

## 🚀 INSTALACIÓN RÁPIDA

### 1. Instalar dependencias
```bash
npm install
```

### 2. Agregar tus canciones
Copia tus archivos MP3 a: `public/assets/audio/`

**Canciones configuradas:**
- `mantra-2026.mp3` (ID: 1)
- `starlight-dreams.mp3` (ID: 2)
- `neon-pulse.mp3` (ID: 3)

Solo se mostrarán las que tengan archivo MP3 disponible.

### 3. Iniciar proyecto
```bash
npm run dev
```

---

## 🎵 AGREGAR MÁS CANCIONES

### Paso 1: Copiar el archivo MP3
Copia tu archivo a `public/assets/audio/tu-cancion.mp3`

### Paso 2: Configurar en src/data/songs.js
```javascript
export const songs = [
  // ... canciones existentes
  {
    id: 4,
    title: "Tu Nueva Canción",
    year: "2026",
    artist: "Sofia Green",
    duration: "3:30",
    audioFile: "/assets/audio/tu-cancion.mp3",
    coverImage: "/assets/covers/tu-cover.jpg",
    color: "#ffff00",
    genre: "Pop",
    releaseDate: "2026-03-15"
  }
];
```

### Paso 3: ¡Listo!
Recarga la página y tu canción aparecerá automáticamente si el archivo existe.

---

## ❤️ SISTEMA DE VOTACIÓN

### Características:
- **1 voto por IP**: Cada usuario solo puede votar una vez por canción
- **Toggle vote**: Click de nuevo para quitar tu voto
- **Persistencia**: Los votos se guardan en localStorage
- **Visual feedback**: Animación al votar

### Cómo funciona:
1. Click en el ❤️ para votar
2. El corazón se llena y el contador aumenta
3. Click de nuevo para quitar tu voto
4. La IP se simula en desarrollo (en producción usarías una API real)

---

## 📁 Estructura del Proyecto

```
sofiagreeen-music/
├── public/assets/
│   ├── audio/              ← TUS ARCHIVOS MP3 AQUÍ
│   │   ├── mantra-2026.mp3
│   │   ├── starlight-dreams.mp3
│   │   ├── neon-pulse.mp3
│   │   └── INSTRUCCIONES.md
│   └── covers/             ← PORTADAS (opcional)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── SongCard.jsx    ← Con sistema de votación
│   ├── hooks/
│   │   ├── useAudioPlayer.js
│   │   ├── useVoting.js    ← 🆕 Hook de votación
│   │   └── useAutoDetectSongs.js ← 🆕 Auto-detección
│   ├── data/
│   │   └── songs.js        ← Configuración de 3 canciones
│   └── styles/
├── package.json
└── README.md
```

---

## 🎨 Colores Configurados

1. **Mantra** - `#00ffff` (Cyan - Electronic)
2. **Starlight Dreams** - `#ff00ff` (Magenta - Synthwave)
3. **Neon Pulse** - `#00ff88` (Verde agua - Electronic)

### Más opciones:
- `#ffff00` - Amarillo brillante
- `#ff6b00` - Naranja
- `#9d00ff` - Púrpura

---

## 🔧 Comandos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa de producción
```

---

## 📊 Características Técnicas

### ✅ Funcionalidades
- Reproductor de audio completo
- Sistema de votación con límite por IP
- Auto-detección de canciones disponibles
- Descarga gratuita de MP3
- Diseño responsive (móvil, tablet, desktop)
- Animaciones futuristas

### 🔒 Seguridad
- 1 voto por IP simulada (localStorage en dev)
- Validación de archivos existentes
- No se muestran canciones sin archivo

### ⚡ Performance
- Lazy loading de audio
- Solo carga canciones disponibles
- CSS animations con GPU

---

## 🆘 Solución de Problemas

### No se ve mi canción nueva
1. Verifica que el archivo MP3 está en `public/assets/audio/`
2. Verifica que el nombre coincide con `songs.js`
3. Recarga la página (Ctrl + F5)
4. Revisa la consola del navegador (F12)

### Los votos no se guardan
- Los votos se guardan en localStorage
- Si limpias el caché, se pierden los votos
- En producción, usarías una base de datos

### Muestra "0 Tracks Disponibles"
- Ningún archivo MP3 existe en la carpeta
- Los nombres no coinciden con la configuración
- Verifica los permisos de los archivos

---

## 🚀 Próximas Mejoras

Ideas para expandir:

- [ ] Backend real para votación
- [ ] Base de datos para persistir votos
- [ ] Sistema de comentarios
- [ ] Playlists personalizadas
- [ ] Compartir en redes sociales
- [ ] Analytics de reproducciones
- [ ] Panel de administración

---

## 📝 Notas Importantes

1. **Auto-detección**: Las canciones se detectan al cargar la página
2. **Votación**: Limitada a 1 voto por usuario (simulado por IP)
3. **Archivos**: Solo MP3 disponibles se muestran
4. **Contador**: Se actualiza automáticamente

---

## 💡 Tips

- **Performance**: El sistema verifica archivos al inicio, puede tardar unos segundos
- **Desarrollo**: Usa archivos MP3 pequeños para probar
- **Producción**: Optimiza los MP3 para web (128-192 kbps)
- **Portadas**: Opcional, si no hay se muestra visualizador animado

---

**Desarrollado con 💜 por Sofia Green Music**

*Plataforma musical del futuro - 2026*
