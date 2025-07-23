export default function HotelCrawlList({ hotels }) {
    return (
        <div className="mt-4">
            <h3 className="font-bold">Danh sách khách sạn đã crawl:</h3>
            {hotels.length === 0 ? (
                <p>Chưa có dữ liệu</p>
            ) : (
                <ul>
                    {hotels.map((h, i) => (
                        <li key={i} className="border-b py-2">
                            <strong>{h.name}</strong> - {h.price} <br />
                            <a href={h.url} target="_blank" rel="noreferrer">
                                Xem chi tiết
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
