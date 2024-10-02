// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tiene un cañón de alegría disparando en los ojos", time: 8 },
  { text: "Y todo aquel que la mira se llena de amor", time: 13 },
  { text: "Es el ángel de la guarda para los demonios", time: 18 },
  { text: "Le juro que no le exagero, todo es corazón", time: 23 },
  { text: "Tiene la vida más vida si la tienes cerca", time: 28 },
  { text: "Es el paraguas, no te baila el agua sin más", time: 32 },
  { text: "Tiene la risa que alivia todos los problemas", time: 38 },
  { text: "Es esa palabra que escucha cada suspirar", time: 43 },
  { text: "Es una vela encendida porque si hay un día en la oscuridad", time: 49 },
  { text: "Vierte un ratito en la herida, por eso es mi amiga para bien y mal", time: 54 },
  { text: "Qué bonito es saber qué siempre estás ahí", time: 59 },
  { text: "Quiero que sepas que voy a cuidar de ti", time: 65 },
  { text: "Qué bonito es querer y poder confiar", time: 70 },
  { text: "Afortunado yo por tener tu amistad", time: 75 },
  { text: "Es la orillita del agua vencida que rompe", time: 86 },
  { text: "Cuando se pone valiente no sabe frenar", time: 91 },
  { text: "No tiene miedo a la gente, lucha en el desorden", time: 96 },
  { text: "Que la justicia gana ya por la libertad", time: 101 },
  { text: "Es una vela encendida porque si hay un día en la oscuridad", time: 106.5 },
  { text: "Vierte un ratito en la herida, por eso es mi amiga para bien y mal", time: 111 },
  { text: "Qué bonito es saber qué siempre estás ahí", time: 117 },
  { text: "Quiero que sepas que voy a cuidar de ti", time: 122 },
  { text: "Qué bonito es querer y poder confiar", time: 127 },
  { text: "Afortunado yo por tener tu amistad", time: 132 },
  { text: "Ella no supo qué hacer cuando la derrotaron", time: 144 },
  { text: "Ella aprendió de las lágrimas, harta de llorar", time: 148 },
  { text: "Por ello tiene ese brillo y el grito de un faro", time: 154 },
  { text: "Es el paso pal caminito perdido encontrar", time: 158 },
  { text: "Qué bonito es saber qué siempre estás ahí", time: 162},
  { text: "Quiero que sepas que voy a cuidar de ti", time: 167 },
  { text: "Qué bonito es querer y poder confiar", time: 173 },
  { text: "Afortunado yo por tener tu amistad", time: 178 },
  { text: "Inserte Sonido de parapapa XD", time: 190 },
  { text: "Qué bonito es saber qué siempre estás ahí", time: 209 },
  { text: "Quiero que sepas que voy a cuidar de ti", time: 214 },
  { text: "Qué bonito es querer y poder confiar", time: 218 },
  { text: "Afortunado yo por tener tu amistad", time: 224 },
  { text: "Qué bonito es saber qué siempre estás ahí", time: 229 },
  { text: "Quiero que sepas que voy a cuidar de ti", time: 233 },
  { text: "Qué bonito es querer y poder confiar", time: 239 },
  { text: "Afortunado yo por tener tu amistad", time: 244 },
  { text: "TQM: Gracias por permitirme compartir la vida contigo", time: 252 },

];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 10000);