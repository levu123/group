// src/components/HotelCard.jsx
import React from 'react';

// Hàm hỗ trợ định dạng tiền tệ Việt Nam đồng
const formatCurrencyVND = (amount) => {
  if (amount === null || amount === undefined) return '';
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(amount);
};

const HotelCard = ({ hotel }) => {
  const handleBookNow = (e) => {
    e.preventDefault(); // Ngăn chặn sự kiện click của thẻ <a>
    alert(`Bạn đã chọn đặt phòng tại: ${hotel.hotelName}`);
    // Trong ứng dụng thực tế, bạn có thể gọi một hàm để điều hướng hoặc mở modal đặt phòng
  };

  return (
    <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden" style={{ transition: 'transform 0.2s', cursor: 'pointer' }}>
      {/* Thẻ <a> bao bọc toàn bộ card để click vào điều hướng */}
      <a href={`/tim-khach-san/${hotel.hotelID}`} className="text-decoration-none text-dark d-flex flex-column h-100">
        <div className="position-relative">
          <img
            src={hotel.imageUrl}
            className="card-img-top"
            alt={hotel.hotelName}
            style={{ objectFit: 'cover', height: '216px' }} // Chiều cao cố định như ảnh mẫu
          />
          {hotel.ReviewRating !== null && (
            <div className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 d-flex align-items-center rounded-3 px-2 py-1" style={{ fontSize: '0.75rem' }}>
              <i className="bi bi-star-fill me-1" style={{ fontSize: '0.7rem' }}></i> {/* Bootstrap Star Icon */}
              <span className="ms-1">{hotel.reviewRating} ({hotel.reviewCount}) đánh giá</span>
            </div>
          )}
        </div>
        <div className="card-body d-flex flex-column pb-0">
          <div className="d-flex align-items-center badge bg-light text-muted px-2 py-1 rounded-3 mb-2" style={{ width: 'fit-content', fontSize: '0.75rem' }}>
            <i className="bi bi-geo-alt-fill me-1" style={{ fontSize: '0.7rem' }}></i> {/* Bootstrap Location Icon */}
            <span className="ms-1">{hotel.location}</span>
          </div>
          <h5 className="card-title fw-semibold fs-6 mb-2">{hotel.hotelName}</h5>
          {hotel.NumberOfRooms !== null && (
            <div className="d-flex align-items-center text-muted mb-3" style={{ fontSize: '0.875rem' }}>
              <i className="bi bi-building me-2" style={{ fontSize: '1rem' }}></i> {/* Bootstrap Building Icon */}
              <p className="mb-0 ms-1">{hotel.numberOfRooms} phòng</p>
            </div>
          )}
        </div>
        <div className="card-footer bg-white border-top d-flex justify-content-between align-items-end pt-3 pb-3 px-3">
          <div>
            {hotel.OriginalPrice !== null && (
              <p className="text-muted text-decoration-line-through mb-0" style={{ fontSize: '0.875rem' }}>
                {formatCurrencyVND(hotel.originalPrice)} / phòng
              </p>
            )}
            {hotel.DiscountedPrice !== null && (
              <p className="fw-bold mb-0" style={{ fontSize: '1.125rem', color: '#0E4F4F' }}>
                {formatCurrencyVND(hotel.discountedPrice)} / phòng
              </p>
            )}
          </div>
          <button type="button" className="btn btn-primary btn-sm px-3 py-2 rounded-3" style={{ backgroundColor: '#0E4F4F', borderColor: '#0E4F4F', '--bs-btn-hover-bg': '#1A6B6B', '--bs-btn-hover-border-color': '#1A6B6B' }} onClick={handleBookNow}>
            Đặt ngay
          </button>
        </div>
      </a>
    </div>
  );
};

export default HotelCard;