import React from 'react'

const Works = () => {
  return (
    <div>
            <section id="how-it-works" className="py-20 bg-neural-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-shimmer">How It Works</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Get started with NeuroHome in three simple steps
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                    <div className="glass-effect rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-neural-blue group-hover:bg-opacity-30 transition-all duration-300">
                        <span className="text-3xl font-bold text-neural-blue">1</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Login</h3>
                    <p className="text-gray-300 mb-6">Sign in securely with your Google account to access your personalized smart home dashboard.</p>
                    <div className="glass-effect rounded-xl p-4 inline-block">
                        <svg className="w-12 h-12 text-neural-blue mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                </div>
                
                <div className="text-center group">
                    <div className="glass-effect rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-neural-purple group-hover:bg-opacity-30 transition-all duration-300">
                        <span className="text-3xl font-bold text-neural-purple">2</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Speak</h3>
                    <p className="text-gray-300 mb-6">Use voice commands through our web interface or call our AI agent directly from any phone.</p>
                    <div className="glass-effect rounded-xl p-4 inline-block animate-pulse-slow">
                        <svg className="w-12 h-12 text-neural-purple mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/>
                            <path d="M19 10v3a7 7 0 0 1-14 0v-3"/>
                            <line x1="12" y1="19" x2="12" y2="23"/>
                            <line x1="8" y1="23" x2="16" y2="23"/>
                        </svg>
                    </div>
                </div>
                
                <div className="text-center group">
                    <div className="glass-effect rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-neural-cyan group-hover:bg-opacity-30 transition-all duration-300">
                        <span className="text-3xl font-bold text-neural-cyan">3</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Control</h3>
                    <p className="text-gray-300 mb-6">Our AI processes your command, executes the action, and updates your home dashboard in real-time.</p>
                    <div className="glass-effect rounded-xl p-4 inline-block">
                        <svg className="w-12 h-12 text-neural-cyan mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Works
