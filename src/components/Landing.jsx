// src/components/Landing.jsx
import React, { useEffect } from "react";

function Landing({ onDone }) {
  // Array de mensajes alternativos
  const messages = [
    "Hoy es un buen día para crecer",
    "Todo empieza con un pequeño paso",
    "Abraza cada oportunidad",
    "Eres lo que decides ser",
    "Florece donde estés plantado",
    "Cada día cuenta, aprovéchalo",
    "Confía en el proceso",
    "La paciencia trae frutos dulces",
    "Sé paciente contigo mismo",
    "Estás justo donde debes estar",
    "Cree en ti mismo primero",
    "Sé amable contigo y con otros",
    "Nunca es tarde para empezar",
    "La felicidad crece desde adentro",
    "Cree en tu potencial",
    "Las raíces fuertes aguantan cualquier viento",
    "Avanza un paso a la vez",
    "Todo gran árbol fue semilla",
    "Disfruta cada etapa del camino",
    "El crecimiento lleva tiempo",
    "Vive hoy, crea mañana",
    "Mantén la calma y sigue adelante",
    "Enfócate en lo bueno",
    "El mejor día es hoy",
    "Confía en tu ritmo natural",
    "La felicidad crece cuando se comparte",
    "Respira, sonríe y continúa",
    "Mantén la mirada hacia adelante",
    "Sigue regando tus sueños",
    "La paciencia trae recompensas",
    "Cada día es una nueva oportunidad",
    "El progreso es mejor que la perfección",
    "Cuida tus raíces",
    "Todo esfuerzo dará frutos",
    "Celebra tus pequeños logros",
    "Crecer implica cambios",
    "Alimenta lo positivo",
    "Las tormentas fortalecen",
    "Tu esfuerzo es tu mejor inversión",
    "Cultiva buenos pensamientos",
    "Las mejores cosas toman tiempo",
    "Nunca dejes de aprender",
    "Cambia, adapta, crece",
    "Nada florece todo el año, sé paciente",
    "Eres más fuerte de lo que crees",
    "Cada momento es aprendizaje",
    "Confía en tu camino",
    "Crecer duele, pero vale la pena",
    "La vida recompensa a quien persevera"
  ];
  
    // Obtenemos la fecha actual
    const today = new Date();
    // Recuerda que los meses en JS son 0-indexados (Marzo es 2)
    const isBirthday = today.getMonth() === 2 && today.getDate() === 23 || today.getMonth() === 2 && today.getDate() === 29;
    const randomMessage = isBirthday
      ? "¡Feliz cumpleaños!"
      : messages[Math.floor(Math.random() * messages.length)];
      

  useEffect(() => {
    const timer = setTimeout(() => {
      onDone();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-purple-200 to-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-slate-700 animate-pulse">
          ¡Hola Pol!
        </h1>
        <p className="text-lg text-gray-600">{randomMessage}</p>
      </div>
    </div>
  );
}

export default Landing;
