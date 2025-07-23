import { useState } from "react";
import { crawlHotels } from "../services/crawlApi";
import HotelCrawlForm from "../components/HotelCrawlForm";
import HotelCrawlList from "../components/HotelCrawlList";

export default function HotelCrawlDashboard() {
    const [hotels, setHotels] = useState([]);

    const handleCrawl = async (params) => {
        const data = await crawlHotels(params);
        setHotels(data);
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Crawl Khách Sạn Du Lịch</h1>
            <HotelCrawlForm onCrawl={handleCrawl} />
            <HotelCrawlList hotels={hotels} />
        </div>
    );
}
