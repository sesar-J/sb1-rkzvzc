import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import BlogList from './components/BlogList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <Carousel />
      <div className="flex-grow container mx-auto px-4 py-8 flex">
        <main className="w-3/4 pr-8">
          <BlogList />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;