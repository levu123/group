import axios from "axios";

const API_BASE = "http://localhost:5008/api"; // backend ASP.NET Core API

// Gửi request bắt đầu crawl hotel
export const crawlHotels = async ({ url, startDate, endDate }) => {
    const res = await axios.get(`${API_BASE}/HotelCrawl/crawl`, {
        params: { url, startDate, endDate },
    });
    return res.data;
};
