import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('programme');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [betAmount, setBetAmount] = useState(10);
  const [odds, setOdds] = useState(4.5);

  const races = [
    { id: 'r5c4', reunion: 'R5 C4', location: 'Lingfield', name: 'John Cunliffe Obf 80th Birthday', type: 'Plat', distance: '1207m', partants: 12, time: '18:48', urgent: true, cote: '9.8' },
    { id: 'r6c3', reunion: 'R6 C3', location: 'Cabourg', name: 'Prix Des Jacinthes', type: 'Attelé', distance: '2725m', partants: 12, time: '19:03', urgent: false, cote: '6.4' },
    { id: 'r1c8', reunion: 'R1 C8', location: 'Deauville', name: 'Prix des Greniers A Sel', type: 'Plat', distance: '2000m', partants: 14, time: '18:30', arrivee: '4 - 3 - 6 - 1 - 9', finished: true }
  ];

  const news = [
    { id: 1, title: 'ITW : CABOURG (R6C2) - LA DECIDARE', time: '19:27', category: 'Interview' },
    { id: 2, title: 'ترشيحات سباق القينطي اليوم في Deauville', time: '18:15', category: 'Pronostics' }
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', paddingBottom: '70px', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1e293b', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ef4444' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '18px', color: '#ef4444', fontWeight: 'bold' }}>SOREC @ PMU PRO</h1>
          <span style={{ fontSize: '10px', color: '#94a3b8' }}>منصة المراهن المحترف 🐎</span>
        </div>
        <span style={{ backgroundColor: '#ef4444', padding: '4px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>
          🔴 LIVE
        </span>
      </header>

      {/* Main Container */}
      <main style={{ padding: '12px' }}>
        {/* Tab 1: Programme & Races */}
        {activeTab === 'programme' && (
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <button onClick={() => setSelectedFilter('all')} style={filterStyle(selectedFilter === 'all')}>📋 الكل</button>
              <button onClick={() => setSelectedFilter('live')} style={filterStyle(selectedFilter === 'live')}>⚡ القادمة</button>
              <button onClick={() => setSelectedFilter('finished')} style={filterStyle(selectedFilter === 'finished')}>🏆 النتائج</button>
            </div>

            {races
              .filter(r => selectedFilter === 'all' || (selectedFilter === 'live' && !r.finished) || (selectedFilter === 'finished' && r.finished))
              .map(r => (
                <div key={r.id} style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '10px', marginBottom: '10px', borderRight: `5px solid ${r.finished ? '#22c55e' : '#ef4444'}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#94a3b8' }}>
                    <span style={{ fontWeight: 'bold', color: '#38bdf8' }}>{r.reunion} - {r.location}</span>
                    <span>⏰ {r.time}</span>
                  </div>
                  <div style={{ fontWeight: 'bold', margin: '6px 0', fontSize: '14px' }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{r.type} | {r.partants} خيل | {r.distance}</span>
                    {r.cote && <span style={{ color: '#4ade80', fontWeight: 'bold' }}>Cote: {r.cote}</span>}
                  </div>
                  {r.finished && (
                    <div style={{ marginTop: '8px', backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', fontSize: '12px', color: '#facc15' }}>
                      🏁 الوصول النهائي: <strong>{r.arrivee}</strong>
                    </div>
                  )}
                </div>
            ))}
          </div>
        )}

        {/* Tab 2: Live Stream */}
        {activeTab === 'direct' && (
          <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
            <h3 style={{ color: '#ef4444', marginTop: 0 }}>📺 LE GRAND DIRECT</h3>
            <p style={{ color: '#94a3b8', fontSize: '13px' }}>متابعة فورية للسباقات والاستوديو التحليلي</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
              <button style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>▶ البث المرئي</button>
              <button style={{ backgroundColor: '#334155', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>🎧 البث الصوتي</button>
            </div>
          </div>
        )}

        {/* Tab 3: News */}
        {activeTab === 'news' && (
          <div>
            <h3>📰 الأخبار والتوصيات</h3>
            {news.map(n => (
              <div key={n.id} style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '8px', marginBottom: '8px', borderLeft: '4px solid #38bdf8' }}>
                <span style={{ fontSize: '10px', backgroundColor: '#0284c7', padding: '2px 6px', borderRadius: '4px' }}>{n.category}</span>
                <div style={{ fontWeight: 'bold', marginTop: '4px' }}>{n.title}</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>{n.time}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Bet Calculator */}
        {activeTab === 'calc' && (
          <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '12px' }}>
            <h3 style={{ marginTop: 0, color: '#4ade80' }}>🧮 حاسبة الأرباح المتوقعة</h3>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>مبلغ الرهان (درهم):</label>
              <input type="number" value={betAmount} onChange={(e) => setBetAmount(Number(e.target.value))} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>الاحتمال (Cote):</label>
              <input type="number" value={odds} onChange={(e) => setOdds(Number(e.target.value))} style={inputStyle} />
            </div>
            <div style={{ backgroundColor: '#0f172a', padding: '12px', borderRadius: '8px', marginTop: '15px', textAlign: 'center' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>الربح الصافي المتوقع:</span>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#4ade80' }}>{(betAmount * odds).toFixed(2)} DH</div>
            </div>
          </div>
        )}
      </main>

      {/* Navigation */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#1e293b', display: 'flex', borderTop: '1px solid #334155', height: '60px' }}>
        <button onClick={() => setActiveTab('programme')} style={navStyle(activeTab === 'programme')}>📅 البرنامج</button>
        <button onClick={() => setActiveTab('direct')} style={navStyle(activeTab === 'direct')}>📺 البث</button>
        <button onClick={() => setActiveTab('news')} style={navStyle(activeTab === 'news')}>📰 الأخبار</button>
        <button onClick={() => setActiveTab('calc')} style={navStyle(activeTab === 'calc')}>🧮 الحاسبة</button>
      </nav>
    </div>
  );
}

const filterStyle = (active) => ({
  flex: 1, padding: '8px', borderRadius: '6px', border: 'none',
  backgroundColor: active ? '#ef4444' : '#334155', color: '#fff', fontSize: '12px', fontWeight: 'bold'
});

const navStyle = (active) => ({
  flex: 1, backgroundColor: 'transparent', border: 'none',
  color: active ? '#ef4444' : '#94a3b8', fontWeight: active ? 'bold' : 'normal', fontSize: '11px'
});

const inputStyle = {
  width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #334155',
  backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box'
};
