import React, { useState, useEffect, useRef, useMemo } from "react";
import "@styles/plant/CartoonPlant.css";
import BubbleText from "@components/modals/BubbleText";

// Función para calcular la edad y el mensaje
const calculateAgeMessage = () => {
  const birthDate = new Date(2025, 2, 23); // 23 de marzo de 2025
  const today = new Date();
  let displayMessage = "";

  if (today < birthDate) {
    // Si aún no ha nacido
    const diffTime = birthDate.getTime() - today.getTime();
    const daysUntilBirth = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    displayMessage = `Faltan ${daysUntilBirth} día${daysUntilBirth !== 1 ? "s" : ""} para tu nacimiento`;
  } else {
    // Si ya nació, calcular edad en años y días
    let years = today.getFullYear() - birthDate.getFullYear();
    let lastBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    if (today < lastBirthday) {
      years--;
      lastBirthday = new Date(today.getFullYear() - 1, birthDate.getMonth(), birthDate.getDate());
    }

    const diffTime = today.getTime() - lastBirthday.getTime();
    const daysSinceBirthday = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    displayMessage = `Edad: ${years} año${years !== 1 ? "s" : ""} y ${daysSinceBirthday} día${daysSinceBirthday !== 1 ? "s" : ""}`;
  }

  return displayMessage;
};

const CartoonPlant = () => {
  const [isHappy, setIsHappy] = useState(false); // Establecer estado para los ojos
  const eyeRefs = useRef([]); // Array de referencias para los ojos

  const displayMessage = useMemo(() => calculateAgeMessage(), []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      eyeRefs.current.forEach((eye) => {
        if (!eye) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = 3; // Intensidad del movimiento
        eye.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="cartoon" onClick={() => setIsHappy(!isHappy)}>
        {/* Sombra general */}
        <div className="shadow r"></div>

        {/* Maceta con cara */}
        <div className="pot b r ha">
          {/* Ojos felices o normales */}
          <div className={`eye ${isHappy ? "happy" : ""}`} ref={(el) => (eyeRefs.current[0] = el)}></div>
          <div className={`eye ${isHappy ? "happy" : ""}`} ref={(el) => (eyeRefs.current[1] = el)}></div>
          <div className="mouth b r"></div>
        </div>

        {/* Hojas */}
        <div className="leave b"></div>
        <div className="leave leave-2 b"></div>

        {/* Sombra específica */}
        <div className="shadow plant-shadow r"></div>
        <div className="plant r ha" />
      </div>
      {/* Burbuja de texto */}
      <BubbleText>
        <p>Paxy</p>
        <p>{displayMessage}</p>
      </BubbleText>
    </>
  );
};

export default CartoonPlant;
