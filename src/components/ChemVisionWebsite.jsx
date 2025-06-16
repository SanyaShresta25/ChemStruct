import React from 'react';
import { ArrowRight, Atom, Camera, FlaskConical, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const ChemVisionWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer">ChemStruct</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Name to Structure</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Image to Structure</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Titration Analyzer</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Settings</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Atom className="w-4 h-4" />
            <span>Advanced Chemistry Analysis Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-emerald-500">ChemStruct</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your advanced chemistry analysis platform for converting chemical names to 
            structures, analyzing images of chemical compounds, and processing titration 
            videos with precision and intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful <span className="text-emerald-500">Chemistry Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our suite of advanced tools designed to make chemistry analysis more 
              accessible, accurate, and efficient for researchers and students alike.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Name to Structure */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Name to Structure</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Enter IUPAC or common chemical names to generate interactive 3D molecular models 
                with precise atomic positioning and bond visualization.
              </p>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold transition-colors">
                Try Now
              </button>
            </div>

            {/* Image to Structure */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Image to Structure</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Upload images of hand-drawn or printed chemical structures for automatic recognition 
                and conversion to digital molecular models.
              </p>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold transition-colors">
                Try Now
              </button>
            </div>

            {/* Titration Analyzer */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Titration Analyzer</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Upload titration videos to automatically detect color changes and generate precise 
                molecular models from your experimental data.
              </p>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold transition-colors">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">ChemStruct</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Visualizing chemistry in a new dimension. Advanced tools for 
                chemical analysis, structure recognition, and molecular modeling.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Name to Structure</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Image Analysis</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Titration Analyzer</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">3D Visualization</a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">API Reference</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 ChemStruct. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChemVisionWebsite;