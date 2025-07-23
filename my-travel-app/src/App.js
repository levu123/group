import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HotelList from "./components/HotelList";
import HotelCrawlDashboard from "./pages/HotelCrawlDashboard";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="p-3 bg-light border-bottom">
                    <h1 className="text-center h3 text-primary">
                        Ứng dụng du lịch: Tìm kiếm khách sạn & Crawl Tour
                    </h1>
                    <nav className="text-center mt-3">
                        {/* Nút điều hướng */}
                        <Link to="/" className="btn btn-primary mx-2">
                            Trang chủ (Khách sạn)
                        </Link>
                        <Link to="/crawl" className="btn btn-success mx-2">
                            Crawl Khách sạn
                        </Link>
                    </nav>
                </header>

                <main className="container mt-4">
                    <Routes>
                        <Route path="/" element={<HotelList />} />
                        <Route path="/crawl" element={<HotelCrawlDashboard />} />
                    </Routes>
                </main>

                <footer className="p-3 bg-light border-top text-center text-muted mt-5">
                    &copy; {new Date().getFullYear()} Ứng dụng du lịch.
                </footer>
            </div>
        </Router>
    );
}

export default App;
