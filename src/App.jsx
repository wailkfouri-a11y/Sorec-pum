import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('live');
  const [races, setRaces] = useState([]);
  const [news, setNews] = useState([]);
  const [results, setResults] = useState([]);

  // محاكاة جلب البيانات التلقائي (يمكن ربطها بـ API)
  useEffect(() => {
    // بيانات السباقات المباشرة
    setRaces([
      { id: 1, name: 'R1 DEAUVILLE - C8', horse: 'Tiego The First', jockey: 'M. Guyon', cote: '9.8' },
      { id: 2, name: 'R1 DEAUVILLE - C8', horse: 'Gerard Ter Borch', jockey: 'A. Hamelin', cote: '9.1' }
    ]);

    // الأخبار
    setNews([
      { id: 1, title: 'تحليلات سباقات اليوم في Deauville', time: 'منذ 10 دقائق' },
      { id: 2, title: 'تغييرات في قائمة الجوكي المشاركين', time: 'منذ ساعة' }
    ]);

    // النتائج
    setResults([
      { id: 1, race: 'R1 C7', winner: 'Caramelito', arrivee: '4 - 2 - 8 - 1' }
    ]);
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', paddingBottom: '60px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#2e7d32', padding: '15px', textAlign: 'center', fontWeight: 'bold' }}>
        منصة PMU & SOREC المباشرة 🔴
      </div>

      {/* Main Content */}
      <div style={{ padding: '15px' }}>
        {activeTab === 'live' && (
          <div>
            <h3>السباقات المباشرة</h3>
            {races.map(r => (
              <div key={r.id} style={{ backgroundColor: '#1e1e1e', padding: '12px', marginBottom: '10px', borderRadius: '8px', borderRight: '4px solid #29b6f6' }}>
                <strong>{r.name}</strong>
                <p style={{ margin: '5px 0 0 0', color: '#aaa' }}>{r.horse} | {r.jockey} (Cote: {r.cote})</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'results' && (
          <div>
            <h3>النتائج الأخيرة</h3>
            {results.map(res => (
              <div key={res.id} style={{ backgroundColor: '#1e1e1e', padding: '12px', marginBottom: '10px', borderRadius: '8px', borderRight: '4px solid #66bb6a' }}>
                <strong>{res.race}</strong>
                <p style={{ margin: '5px 0 0 0', color: '#aaa' }}>الفائز: {res.winner} (الوصول: {res.arrivee})</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'news' && (
          <div>
            <h3>آخر الأخبار</h3>
            {news.map(n => (
              <div key={n.id} style={{ backgroundColor: '#1e1e1e', padding: '12px', marginBottom: '10px', borderRadius: '8px', borderRight: '4px solid #ffa726' }}>
                <strong>{n.title}</strong>
                <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#888' }}>{n.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', backgroundColor: '#1e1e1e', borderTop: '1px solid #333' }}>
        <button onClick={() => setActiveTab('live')} style={{ flex: 1, padding: '12px', background: 'none', color: activeTab === 'live' ? '#4caf50' : '#fff', border: 'none' }}>مباشر</button>
        <button onClick={() => setActiveTab('results')} style={{ flex: 1, padding: '12px', background: 'none', color: activeTab === 'results' ? '#4caf50' : '#fff', border: 'none' }}>النتائج</button>
        <button onClick={() => setActiveTab('news')} style={{ flex: 1, padding: '12px', background: 'none', color: activeTab === 'news' ? '#4caf50' : '#fff', border: 'none' }}>الأخبار</button>
      </div>
    </div>
  );
}
