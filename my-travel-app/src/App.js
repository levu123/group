// src/App.js
import React from 'react';
import HotelList from './components/HotelList'; // Import HotelList component

function App() {
  return (
    <div className="App">
      <header className="p-3 bg-light border-bottom">
        <h1 className="text-center h3 text-primary">Ứng dụng tìm kiếm và đặt phòng khách sạn</h1>
      </header>
      <main>
        <HotelList /> {/* Render HotelList component */}
      </main>
      <footer className="p-3 bg-light border-top text-center text-muted mt-5">
        &copy; {new Date().getFullYear()} Ứng dụng du lịch.
      </footer>
    </div>
  );
}

export default App;