import { useState } from "react";
import dayjs from "dayjs";

export default function HotelCrawlForm({ onCrawl }) {
    const [url, setUrl] = useState("");
    const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!url) return alert("Vui lòng nhập URL!");
        onCrawl({ url, startDate, endDate });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-4 border rounded flex flex-col gap-2 max-w-md"
        >
            <h3 className="text-lg font-bold">🏨 Crawl dữ liệu khách sạn</h3>
            <input
                type="text"
                placeholder="Nhập URL trang khách sạn"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border p-2"
            />
            <label>
                Bắt đầu:
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border p-1 ml-2"
                />
            </label>
            <label>
                Kết thúc:
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border p-1 ml-2"
                />
            </label>
            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Bắt đầu crawl hotel
            </button>
        </form>
    );
}
