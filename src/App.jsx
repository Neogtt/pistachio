
import NewsFeed from './components/NewsFeed';
import StatsPanel from './components/StatsPanel';

function App() {
  return (
    <div className="app-container">
      {/* Header Panel */}
      <header className="panel header-panel">
        <div className="logo-section">
          <h1>Fıstık <span className="highlight-text">Haftalık</span></h1>
          <span className="date-badge">14 Aralık 2025</span>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Left Col: News */}
        <div className="news-section">
          <NewsFeed />
        </div>

        {/* Right Col: Stats & Widgets */}
        <div className="stats-section">
          <StatsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
