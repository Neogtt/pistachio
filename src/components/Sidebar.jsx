import React from 'react';

const Sidebar = () => {
    return (
        <aside className="panel" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="logo-area" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-pistachio)' }}>
                    Fıstık
                    <br />
                    <span style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Haftalık</span>
                </h1>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <NavButton active icon="📰">Bülten</NavButton>
                <NavButton icon="📈">Piyasa</NavButton>
                <NavButton icon="📊">Analiz</NavButton>
                <NavButton icon="⚙️">Ayarlar</NavButton>
            </nav>

            <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                v1.0.0
            </div>
        </aside>
    );
};

const NavButton = ({ children, icon, active }) => (
    <button
        style={{
            background: active ? 'rgba(147, 197, 114, 0.15)' : 'transparent',
            color: active ? 'var(--accent-pistachio)' : 'var(--text-secondary)',
            border: 'none',
            padding: '12px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.95rem',
            fontWeight: active ? '600' : '400',
            width: '100%',
            textAlign: 'left',
            transition: 'all 0.2s',
        }}
    >
        <span>{icon}</span>
        {children}
    </button>
);

export default Sidebar;
