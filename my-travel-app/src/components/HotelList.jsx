// src/components/HotelList.jsx
import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard.jsx';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Đặt URL API của bạn ở đây. Đảm bảo nó khớp với cổng mà backend đang chạy.
  // Đã kiểm tra ở câu hỏi trước: API chạy tại https://localhost:7050/api/Hotels
  const API_URL = 'https://localhost:7050/api/Hotels'; 

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHotels(data);
      } catch (err) {
        setError(`Không thể tải dữ liệu khách sạn: ${err.message}. Đảm bảo API backend đang chạy tại ${API_URL}`);
        console.error("Error fetching hotels:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau render đầu tiên

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </div>
        <p className="mt-2 text-primary">Đang tải danh sách khách sạn...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center m-4" role="alert">
        Lỗi: {error}
      </div>
    );
  }

  // Kiểm tra nếu không có khách sạn nào được trả về
  if (hotels.length === 0) {
    return (
      <div className="alert alert-info text-center m-4" role="alert">
        Không tìm thấy khách sạn nào. Vui lòng thêm dữ liệu vào database.
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Khách Sạn Nổi Bật</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {hotels.map((hotel) => (
          <div className="col d-flex" key={hotel.HotelID}>
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;