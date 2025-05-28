import React from 'react'

const Feature = () => {
  return (
    <div>
         <section id="features" className="py-20 bg-neural-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-shimmer">Powerful Features</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Experience the future of home automation with our advanced AI-powered control system
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">🎙️</div>
                    <h3 className="text-xl font-bold mb-3 text-neural-blue">Voice via Phone and Web</h3>
                    <p className="text-gray-300">Control your home through voice commands using our web interface or by calling our AI agent directly.</p>
                </div>
                
                <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">🕹️</div>
                    <h3 className="text-xl font-bold mb-3 text-neural-purple">Remote Device Control</h3>
                    <p className="text-gray-300">Manage lights, fans, AC, and other smart devices from anywhere in the world with real-time updates.</p>
                </div>
                
                <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-xl font-bold mb-3 text-neural-cyan">Secure Google Login</h3>
                    <p className="text-gray-300">Your data is protected with industry-standard security and seamless Google authentication.</p>
                </div>
                
                <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">📞</div>
                    <h3 className="text-xl font-bold mb-3 text-neural-blue">Works Without Internet</h3>
                    <p className="text-gray-300">Call our AI agent even when your home devices are offline - we'll queue commands for later execution.</p>
                </div>
                
                <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-xl font-bold mb-3 text-neural-purple">Smart Room Detection</h3>
                    <p className="text-gray-300">AI automatically identifies rooms and devices, making voice commands more intuitive and natural.</p>
                </div>
                
                <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">⚙️</div>
                    <h3 className="text-xl font-bold mb-3 text-neural-cyan">Expandable to IoT</h3>
                    <p className="text-gray-300">Seamlessly integrate with thousands of IoT devices and expand your smart home ecosystem.</p>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Feature
