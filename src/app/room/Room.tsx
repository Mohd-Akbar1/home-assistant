import { useState } from 'react';

export default function LightBulbComponent() {
  const [bulb1, setBulb1] = useState(false);
  const [bulb2, setBulb2] = useState(false);
  const [bulb3, setBulb3] = useState(false);

  const LightBulb = ({ isOn, onToggle, label }) => {
    return (
      <div className="flex flex-col items-center space-y-6">
        {/* Light Bulb Container with Glow Effect */}
        <div className={`relative transition-all duration-500 ${isOn ? 'drop-shadow-2xl' : ''}`}>
          {/* Outer Glow Effect when ON */}
          {isOn && (
            <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-30 blur-3xl scale-150 animate-pulse"></div>
          )}
          
          {/* Main Bulb Container */}
          <div className="relative w-32 h-40 sm:w-40 sm:h-48">
            {/* Bulb Glass/Body */}
            <div className={`
              absolute inset-0 rounded-full transition-all duration-500
              ${isOn 
                ? 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 shadow-lg shadow-yellow-400/50' 
                : 'bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 shadow-lg shadow-gray-400/30'
              }
              before:absolute before:inset-2 before:rounded-full before:bg-gradient-to-br before:from-white/40 before:to-transparent
              after:absolute after:top-4 after:left-6 after:w-8 after:h-16 after:bg-gradient-to-r after:from-white/60 after:to-transparent after:rounded-full after:blur-sm
            `}>
              {/* Filament Effect when ON */}
              {isOn && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-12 bg-gradient-to-b from-orange-400 to-yellow-500 opacity-80 rounded-sm animate-pulse"></div>
                  <div className="absolute top-2 left-1 w-6 h-2 bg-orange-300 rounded-full opacity-60"></div>
                  <div className="absolute top-6 left-1 w-6 h-2 bg-orange-300 rounded-full opacity-60"></div>
                </div>
              )}
            </div>
            
            {/* Base/Screw Part */}
            <div className={`
              absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-12 
              ${isOn 
                ? 'bg-gradient-to-b from-gray-300 to-gray-500' 
                : 'bg-gradient-to-b from-gray-400 to-gray-600'
              }
              rounded-b-lg shadow-lg
            `}>
              {/* Screw Lines */}
              <div className="absolute inset-x-0 top-2 h-px bg-gray-600 opacity-70"></div>
              <div className="absolute inset-x-0 top-4 h-px bg-gray-600 opacity-70"></div>
              <div className="absolute inset-x-0 top-6 h-px bg-gray-600 opacity-70"></div>
              <div className="absolute inset-x-0 top-8 h-px bg-gray-600 opacity-70"></div>
            </div>
          </div>
          
          {/* Additional Glow Rings when ON */}
          {isOn && (
            <>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-20 scale-110 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-yellow-400 opacity-30 scale-125"></div>
            </>
          )}
        </div>
        
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className={`
            px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95
            ${isOn 
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-yellow-500/30' 
              : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 shadow-gray-500/30'
            }
          `}
        >
          {isOn ? '💡 Turn OFF' : '🔌 Turn ON'} {label}
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-[50vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 mt-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
           Control Your Home, One Call Away"
          </h1>
          <p className="text-gray-300 text-sm">
           

             Turn lights on, power off your fan, or start the coffee maker — all with a simple phone call.
          No apps, no internet required. Just dial and command.
          Your home listens, wherever you are.

          </p>
         
        </div>
        
        {/* Light Bulbs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 place-items-center">
         
          <LightBulb 
            isOn={bulb1} 
            onToggle={() => setBulb1(!bulb1)} 
            label="Living Room Light"
          />
       
          <LightBulb 
            isOn={bulb2} 
            onToggle={() => setBulb2(!bulb2)} 
            label="Bedroom Light"
          />

        
          <LightBulb 
            isOn={bulb3} 
            onToggle={() => setBulb3(!bulb3)} 
            label="Kitchen Light"
          />
        </div>
        
        {/* Status Display */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Status</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className={`px-3 py-1 rounded-full ${bulb1 ? 'bg-yellow-500 text-yellow-900' : 'bg-gray-600 text-gray-300'}`}>
                Bulb 1: {bulb1 ? 'ON' : 'OFF'}
              </span>
              <span className={`px-3 py-1 rounded-full ${bulb2 ? 'bg-yellow-500 text-yellow-900' : 'bg-gray-600 text-gray-300'}`}>
                Bulb 2: {bulb2 ? 'ON' : 'OFF'}
              </span>
              <span className={`px-3 py-1 rounded-full ${bulb3 ? 'bg-yellow-500 text-yellow-900' : 'bg-gray-600 text-gray-300'}`}>
                Bulb 3: {bulb3 ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}