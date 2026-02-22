import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CombatPage } from './features/combat/components/CombatPage';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Turn Tracker PF2e</h1>
      <p className="text-gray-400 mb-4">
        Open a combat to manage initiative and turns.
      </p>
      <Link
        to="/combat/1"
        className="inline-block rounded bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500 focus:outline focus:ring-2 focus:ring-amber-400"
      >
        Open combat (mock)
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/combat/:combatId" element={<CombatPage />} />
      </Routes>
    </BrowserRouter>
  );
}
