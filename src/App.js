import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app bg-gray-200 h-screen">
      <Header />
      {/* Body */}
      <div className="body flex">
        <Sidebar />
      </div>
      {/*1. Sidebar */}
      {/*2. Feed */}
      {/*3. Widgets */}
    </div>
  );
}

export default App;
