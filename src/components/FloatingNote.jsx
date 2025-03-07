// src/components/FloatingNote.jsx
import React, { useState } from 'react';
import './FloatingNote.css';

function FloatingNote() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNote = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón flotante */}
      <button 
        onClick={toggleNote}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        Nota
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button 
              onClick={toggleNote}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'Minecraftia, sans-serif' }}>
              ¡Feliz cumpleaños Pol!
            </h2>
            <p className="mb-4" style={{ fontFamily: 'Minecraftia, sans-serif' }}>
              Te quiero presentar a Paxy. <br/><br/>
              Paxy es una plantita, y este de aca es su alma, su soul, su escencia haha <br/><br/>
              Pues el de verdad lo tienes ahi, cerca tuyo. Su nombre significa Paz en latin, pues es lo que mas deseo para ti.<br/><br/>
              Paxy te acompañará hasta donde tu lo cuides, es timido, no le gusta el sol, pero si el moradito pastel como a ti y comer helado a las 11 de la noche. <br/><br/>
              Te quiero mucho y espero que este año sea uno de los mejores de tu vida.
              
             

            </p>
            <p className="text-right" style={{ fontFamily: 'Minecraftia, sans-serif' }}>
              - Innome - Negro - Kush
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingNote;
