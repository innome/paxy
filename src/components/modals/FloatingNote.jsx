// src/components/FloatingNote.jsx
import React, { useState } from 'react';
import Crepper from '@assets/crepper.png';

function FloatingNote() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNote = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón flotante */}
      {/* animate-pulseScale */}
      <button
        onClick={toggleNote}
        className={"w-32 h-12 flex justify-around items-center fixed font-bold rounded-lg pt-3 text-white text-lg bg-[#05c6cf] border border-[#05c6cf] hover:bg-white hover:text-[#05c6cf] bottom-4 right-4 focus:outline-none animate-pulseScale"}
        aria-label="Abrir nota"
      >
        {/* <img className="w-5" src={Crepper} alt="Cara de Creeper" /> */}
        Abrir
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-sm p-6 text-black bg-gray-100 rounded-lg shadow-lg">
            {/* <button
              onClick={toggleNote}
              className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
            >
              X
            </button> */}
            <div className='flex items-center justify-end w-full'>
              <button
                onClick={toggleNote}
                className="absolute top-2 right-2 bg-purple-600 text-white rounded-xl w-10 h-10 py-2 px-3 text-sm transition delay-50 duration-150 ease-in-out hover:bg-[#05c6cf] hover:scale-105 outline-none"
              >
                <img className='w-[15px]' src={Crepper} alt="crepper face" />
              </button>
            </div>
            <h2 className="mb-4 text-2xl" style={{ fontFamily: 'Minecraftia, sans-serif' }}>
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
