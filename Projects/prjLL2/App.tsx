import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroAnimation } from './components/HeroAnimation';
import { Features } from './components/Features';
import { DetailedFeatures } from './components/DetailedFeatures';
import { Footer } from './components/Footer';
import { Background3D } from './components/Background3D';
import { AppPrototype } from './components/AppPrototype';
import { Pricing } from './components/Pricing';

const App: React.FC = () => {
  const [showPrototype, setShowPrototype] = useState(false);

  const startApp = () => {
    window.scrollTo(0, 0);
    setShowPrototype(true);
  };

  const exitApp = () => {
    window.scrollTo(0, 0);
    setShowPrototype(false);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 relative">
      <Background3D />
      
      {showPrototype ? (
        <AppPrototype onBack={exitApp} />
      ) : (
        <>
          <Navbar onStart={startApp} />
          <main className="w-full relative z-10">
            <HeroAnimation onStart={startApp} />
            <Features />
            <DetailedFeatures onStart={startApp} />
            <Pricing />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;