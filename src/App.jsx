import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('programme');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // بيانات سباقات SOREC & PMU
  const coursesData = [
    { id: 'r5c4', reunion: 'R5 C4', location: 'Lingfield', name: 'John Cunliffe Obf 80th Birthday', type: 'Plat', distance: '1207m', partants: 12, time: '18:48', urgent: true, pmuOdds: '9.8' },
    { id: 'r6c3', reunion: 'R6 C3', location: 'Cabourg', name: 'Prix Des Jacinthes', type: 'Attelé', distance: '2725m', partants: 12, time: '19:03', urgent: false, pmuOdds: '6.4' },
    { id: 'r1c8', reunion: 'R1 C8', location: 'Deauville', name: 'Prix des Greniers A Sel', type: 'Plat', distance: '2000m', partants: 14, time: '18:30', arrivee: '4 - 3 - 6 - 1 - 9', finished: true }
  ];

  // الأخبار والتنبيهات العاجلة
  const newsData = [
    { id: 1, title: 'ITW : CABOURG (R6C2) - LA DECIDARE', time: '19:27', category: 'Interview' },
    { id: 2, title: 'تحليلات سباق القينطي اليوم في Deauville', time: '18:15', category: 'Pronostics' }
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', paddingBottom: '70px', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 1. Header & Live Banner */}
      <header style={{ backgroundColor: '#dc2626', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>SOREC @ PMU LIVE</h1>
          <span style={{ fontSize: '11px', color: '#fca5a5' }}>المنصة الموحدة للسباقات والبث المباشر</span>
        </div>
        <span style={{ backgroundColor: '#ef4444', border: '1px solid #fff', padding: '4px 8px', borderRadius: '12px', fontSize: '11px', animation: 'pulse 1.5s infinite' }}>
          🔴 LIVE DIRECT
        </span>
      </header>

      {/* 2. Main Content Router */}
      <main style={{ padding: '12px' }}>
        
        {/* Tab 1: Programme & Races (برنامج السباقات) */}
        {activeTab === 'programme' && (
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <button onClick={() => setSelectedCategory('all')} style={filterBtnStyle(selectedCategory === 'all')}>الكل</button>
              <button onClick={() => setSelectedCategory('live')} style={filterBtnStyle(selectedCategory === 'live')}>الجارية الآن ⚡</button>
              <button onClick={() => setSelectedCategory('finished')} style={filterBtnStyle(selectedCategory === 'finished')}>النتائج ✅</button>
            </div>

            {coursesData
              .filter(c => selectedCategory === 'all' || (selectedCategory === 'live' && !c.finished) || (selectedCategory === 'finished' && c.finished))
              .map(c => (
                <div key={c.id} style={{ backgroundColor: c.urgent ? '#991b1b' : '#1e293b', padding: '12px', borderRadius: '10px', marginBottom: '10px', borderRight: `5px solid ${c.finished ? '#22c55e' : '#ef4444'}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#94a3b8' }}>
                    <span style={{ fontWeight: 'bold', color: '#f8fafc' }}>{c.reunion} - {c.location}</span>
                    <span>{c.time}</span>
                  </div>
                  <div style={{ fontWeight: 'bold', margin: '6px 0', fontSize: '15px' }}>{c.name}</div>
                  <div style={{ fontSize: '12px', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{c.type} | {c.partants} المشاركون | {c.distance}</span>
                    {c.pmuOdds && <span style={{ color: '#4ade80', fontWeight: 'bold' }}>Cote: {c.pmuOdds}</span>}
                  </div>
                  {c.finished && (
                    <div style={{ marginTop: '8px', backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', fontSize: '13px', color: '#facc15' }}>
                      🏁 الوصول النهائي: <strong>{c.arrivee}</strong>
                    </div>
                  )}
                </div>
            ))}
          </div>
        )}

        {/* Tab 2: Le Grand Direct (البث والمباشر) */}
        {activeTab === 'direct' && (
          <div>
            <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', overflow: 'hidden', textAlign: 'center', border: '1px solid #334155' }}>
              <div style={{ backgroundColor: '#dc2626', padding: '15px', fontWeight: 'bold' }}>
                LE GRAND DIRECT (10h20 - 21h45)
              </div>
              <div style={{ padding: '30px 15px' }}>
                <p style={{ color: '#94a3b8', fontSize: '14px' }}>استمع وشاهد الاستوديو التحليلي والسباقات مباشرة</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
                  <button style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
                    ▶ مشاهدة البث
                  </button>
                  <button style={{ backgroundColor: '#334155', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
                    🎧 استماع صوتي
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: News & Pronostics (الأخبار والترشيحات) */}
        {activeTab === 'news' && (
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Dernière Minute & الأخبار</h3>
            {newsData.map(n => (
              <div key={n.id} style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '8px', marginBottom: '8px', borderLeft: '4px solid #38bdf8' }}>
                <span style={{ fontSize: '10px', backgroundColor: '#0284c7', padding: '2px 6px', borderRadius: '4px' }}>{n.category}</span>
                <div style={{ fontWeight: 'bold', marginTop: '4px' }}>{n.title}</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>{n.time}</div>
              </div>
            ))}
          </div>
        )}

      </main>

      {/* 3. Bottom Navigation Bar */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#1e293b', display: 'flex', borderTop: '1px solid #334155', height: '60px' }}>
        <button onClick={() => setActiveTab('programme')} style={navBtnStyle(activeTab === 'programme')}>
          📅 البرنامج والنتائج
        </button>
        <button onClick={() => setActiveTab('direct')} style={navBtnStyle(activeTab === 'direct')}>
          📺 Direct & Replay
        </button>
        <button onClick={() => setActiveTab('news')} style={navBtnStyle(activeTab === 'news')}>
          📰 الأخبار والتحليلات
        </button>
      </nav>

    </div>
  );
}

// Inline Styles Helper
const filterBtnStyle = (active) => ({
  flex: 1,
  padding: '8px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: active ? '#dc2626' : '#334155',
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'bold',
  cursor: 'pointer'
});

const navBtnStyle = (active) => ({
  flex: 1,
  backgroundColor: 'transparent',
  border: 'none',
  color: active ? '#ef4444' : '#94a3b8',
  fontWeight: active ? 'bold' : 'normal',
  fontSize: '12px',
  cursor: 'pointer'
});
