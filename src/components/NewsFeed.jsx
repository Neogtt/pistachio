import React from 'react';
import { newsData } from '../data/mockData';

const NewsFeed = () => {
    return (
        <main className="panel" style={{ overflowY: 'auto', paddingRight: '4px' }}>
            <header style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Haftalık Gelişmeler</h2>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{new Date().toLocaleDateString('tr-TR')}</span>
            </header>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {newsData.map((news) => (
                    <article
                        key={news.id}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            padding: '1rem',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid transparent',
                            cursor: 'pointer',
                            transition: 'border-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    >
                        <div
                            style={{
                                width: '120px',
                                height: '80px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                flexShrink: 0
                            }}
                        >
                            <img
                                src={news.image}
                                alt={news.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--accent-pistachio)' }}>{news.source}</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>• {news.date}</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem', lineHeight: '1.3' }}>{news.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
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
