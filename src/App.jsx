import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';
import StatsPanel from './components/StatsPanel';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <NewsFeed />
      <StatsPanel />
    </div>
  );
}

export default App;
