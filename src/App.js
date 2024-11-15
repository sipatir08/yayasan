import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Stats from './components/stats';
import PostList from './components/postlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Bagian Konten Utama */}
      <div className="content">
        <PostList />
        <Sidebar />
      </div>

      {/* Bagian Statistik */}
      <Stats />

      <Footer />
    </div>
  );
}

export default App;