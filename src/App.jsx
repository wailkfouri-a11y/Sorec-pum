import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState({
    meeting: 'R1 DEAUVILLE',
    race: 'C8 Prix des Greniers A Sel',
    partants: [
      { num: 1, name: 'Tiego The First M4', jockey: 'M. Guyon', weight: '62kg', rope: 'c:8', music: '4p 5p 2p 8p', pmu: '9.8', ze: '8.4', color: '#1e3a8a' },
      { num: 2, name: 'Gerard Ter Borch H4', jockey: 'A. Hamelin', weight: '61kg', rope: 'c:10', music: '1p 2p 7p 6p', pmu: '9.1', ze: '10.9', color: '#15803d' },
      { num: 3, name: 'Anssio H4', jockey: 'C. Lecoeuvre', weight: '60.5kg', rope: 'c:5', music: '2p 3p 5p 1p', pmu: '8.6', ze: '8.0', color: '#047857' },
      { num: 4, name: 'Caramelito H7', jockey: 'T. Bachelot', weight: '60.5kg', rope: 'c:13', music: '2p 2p 6p 7p', pmu: '6.4', ze: '7.3', color: '#b91c1c' }
    ]
  });

  const [time, setTime] = useState(new Date().toLocaleTimeString('ar-MA'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('ar-MA'));
      setData(prev => ({
        ...prev,
        partants: prev.partants.map(item => ({
          ...item,
          pmu: (parseFloat(item.pmu) + (Math.random() * 0.2 - 0.1)).toFixed(1)
        }))
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div dir="rtl" className="notranslate" style={{ minHeight: '100vh', backgroundColor: '#121212', color: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#558b2f', padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>
        🔴 منصة PMU & SOREC المباشرة
      </div>

      <div style={{ background: '#000', padding: '12px', borderBottom: '2px solid #558b2f' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ade80', fontWeight: 'bold' }}>
          <span>{data.meeting} - {data.race}</span>
        </div>
        <div style={{ fontSize: '11px', color: '#aaa', marginTop: '4px' }}>
          آخر تحديث تلقائي: {time}
        </div>
      </div>

      <div style={{ padding: '8px' }}>
        {data.partants.map(item => (
          <div key={item.num} style={{ display: 'flex', alignItems: 'center', background: '#1c1c1c', marginBottom: '6px', padding: '10px', borderRadius: '4px', borderRight: `4px solid ${item.color}` }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', minWidth: '30px' }}>{item.num}</div>
            <div style={{ flex: 1, paddingRight: '10px', dir: 'ltr', textAlign: 'left' }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</div>
              <div style={{ fontSize: '12px', color: '#bbb' }}>{item.jockey} ({item.weight}) [{item.rope}]</div>
              <div style={{ fontSize: '11px', color: '#777' }}>{item.music}</div>
            </div>
            <div style={{ background: '#065f46', color: '#34d399', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
              PMU {item.pmu}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
