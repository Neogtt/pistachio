import React from 'react';
import { newsData } from '../data/mockData';

const NewsFeed = () => {
    return (
        <main className="panel" style={{ height: '100%', overflowY: 'auto', background: 'transparent', border: 'none', padding: 0 }}>
            {/* Header within the feed removed/simplified if needed, or kept as section title */}
            <header style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Öne Çıkanlar</h2>
                <button className="panel" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>Tümünü Gör</button>
            </header>

            <div className="news-grid">
                {newsData.map((news) => (
                    <article key={news.id} className="news-card">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="news-card-image"
                        />
                        <div className="news-card-content">
                            <div className="news-meta">
                                <span className="news-source">{news.source}</span>
                                <span>{news.date}</span>
                            </div>
                            <h3 className="news-title">{news.title}</h3>
                            <p className="news-summary">
                                {news.summary}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
};

export default NewsFeed;
