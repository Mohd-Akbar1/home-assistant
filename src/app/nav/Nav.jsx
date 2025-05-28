import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-shimmer">NeuroHome</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="hover:text-neural-blue transition-colors duration-300 text-white/60">Features</a>
                <a href="#how-it-works" className="hover:text-neural-blue transition-colors duration-300 text-white/60">How It Works</a>
                <a href="#" className="hover:text-neural-blue transition-colors duration-300 text-white/60">Login</a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="border-1 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300 text-white cursor-pointer">
                
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
