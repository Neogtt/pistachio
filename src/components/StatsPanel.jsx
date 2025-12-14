import React from 'react';
import { marketStats } from '../data/mockData';

const StatsPanel = () => {
    return (
        <div className="widgets-area" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Price Ticker Widget */}
            <section className="panel" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '500' }}>Piyasa Özeti</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {marketStats.map((stat, index) => (
                        <div key={index} style={{ padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</span>
                                <span style={{
                                    color: stat.isUp ? '#4ade80' : '#f87171',
                                    fontSize: '0.85rem',
                                    fontWeight: '600'
                                }}>
                                    {stat.change}
                                </span>
                            </div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stat.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Subscribe / Call to Action Widget */}
            <section className="panel" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(147, 197, 114, 0.1), rgba(0,0,0,0))' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Bültene Abone Ol</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Haftalık fıstık piyasası raporunu kaçırma.
                </p>
                <button style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: 'var(--accent-pistachio)',
                    color: '#000',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Abone Ol
                </button>
            </section>

        </div>
    );
};

export default StatsPanel;
