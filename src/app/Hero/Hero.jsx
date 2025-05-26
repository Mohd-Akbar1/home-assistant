import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-gradient absolute inset-0"></div>

        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 blob-shape animate-blob opacity-30"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 blob-shape animate-blob opacity-20"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 blob-shape animate-blob opacity-10"
          style={{ animationDelay: '4s' }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-shimmer">Talk to Your Home.</span>
                <br />
                <span className="text-white">Anytime. Anywhere.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Control lights, fans, and more using your voice or a phone call with our AI-powered smart home system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  id="voiceDemoBtn"
                  className="neural-gradient px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  🎙️ Try Voice Demo
                </button>
                <button className="glass-effect px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                  📞 Call Demo
                </button>
              </div>
            </div>

            {/* Voice Command Illustration */}
            <div className="relative" id="smart-home-box">
              <div className="glass-effect rounded-3xl p-8 animate-float transition-all duration-500">
                <div className="space-y-6">
                  {/* User Command */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse-slow text-lg">
                        📞...
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">You say:</p>
                        <p id="voice-command" className="text-neural-blue font-semibold">
                          "Turn on the bedroom light"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI & Server Processing */}
                  <div className="border-l-2 border-neural-purple pl-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neural-purple rounded-full animate-pulse"></div>
                      <span id="ai-status" className="text-sm text-gray-300">
                        AI processing...
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neural-cyan rounded-full animate-pulse delay-500"></div>
                      <span id="server-status" className="text-sm text-gray-300">
                        Sending command...
                      </span>
                    </div>
                  </div>

                  {/* Final Result */}
                  <div
                    id="result-box"
                    className="flex items-center justify-between rounded-lg p-3 transition-all duration-500"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        id="bulb"
                        className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-2xl transition-all duration-500"
                      >
                        💡
                      </div>
                      <span id="light-status" className="text-green-400 font-semibold">
                        Bedroom Light: ON
                      </span>
                    </div>
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of smart-home-box */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
