// src/App.jsx
import React, { useState } from 'react';
import Landing from './components/Landing';
import Plant from './components/plant/CartoonPlant';
import FloatingNote from './components/modals/FloatingNote';
import CherryBlossomFalling from './components/animation/CherryBlossomFalling';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleLandingDone = () => {
    setShowLanding(false);
  };

  return (
    <div className="relative min-h-screen">
      {showLanding ? (
        <Landing onDone={handleLandingDone} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <CherryBlossomFalling />
          <Plant />
          <FloatingNote />
        </div>
      )}
    </div>
  );
}

export default App;


