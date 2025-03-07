// src/components/CartoonPlant.jsx
import React, { useEffect, useRef } from 'react';
import './CartoonPlant.css';



const CartoonPlant = () => {

  // Fecha de nacimiento: 23 de marzo de 2025 (mes 2 en JS)
  const birthDate = new Date(2025, 2, 23);
  const today = new Date();

  let displayMessage = "";

  if (today < birthDate) {
    // Aún no ha ocurrido el nacimiento, mostramos cuántos días faltan
    const diffTime = birthDate.getTime() - today.getTime();
    const daysUntilBirth = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    displayMessage = `Faltan ${daysUntilBirth} día${daysUntilBirth !== 1 ? "s" : ""} para tu nacimiento`;
  } else {
    // Ya ha ocurrido el nacimiento: calculamos años y días desde el último cumpleaños
    let years = today.getFullYear() - birthDate.getFullYear();
    // Calcula el cumpleaños de este año
    let lastBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today < lastBirthday) {
      years--;
      lastBirthday = new Date(today.getFullYear() - 1, birthDate.getMonth(), birthDate.getDate());
    }
    const diffTime = today.getTime() - lastBirthday.getTime();
    const daysSinceBirthday = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    displayMessage = `Edad: ${years} año${years !== 1 ? "s" : ""} y ${daysSinceBirthday} día${daysSinceBirthday !== 1 ? "s" : ""}`;
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = document.querySelectorAll('.cartoon .eye');
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        // Calcula el centro del ojo
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        // Calcula la diferencia entre la posición del mouse y el centro del ojo
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        // Calcula el ángulo y aplica un desplazamiento limitado
        const angle = Math.atan2(deltaY, deltaX);
        const distance = 3; // Ajusta la intensidad del movimiento
        eye.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="cartoon">
      {/* Sombra general */}
      <div className="shadow r"></div>
      
      {/* Maceta: se mantiene la forma original; 
          dentro se agregan los brazos y la cara centrada */}
      <div className="pot b r ha">
        {/* Cara centrada en la maceta */}
          <div className="eye r"></div>
          <div className="eye r"></div>
          <div className="mouth b r"></div>
      </div>
      
      {/* Hojas de la planta */}
      <div className="leave b"></div>
      <div className="leave leave-2 b"></div>
      
      {/* Sombra específica de la planta */}
      <div className="shadow plant-shadow r"></div>
      {/* Sombra de la planta */}
      <div className="plant r ha">
      </div>
      
      <div className="legend">Paxy</div>
      <div className="age">{displayMessage}</div>
    </div>
  );
};

export default CartoonPlant;
