import React from 'react';
import Feed from './components/Feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app bg-[#f3f2ef] h-screen">
      <Header />
      {/* Body */}
      <div className="body flex">
        <Sidebar />
        <Feed />
      </div>
      {/*3. Widgets */}
    </div>
  );
}

export default App;
