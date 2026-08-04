import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/live-races', (req, res) => {
  res.json({
    updatedAt: new Date().toLocaleTimeString(),
    meeting: 'R1 - DEAUVILLE',
    race: 'C8 Prix des Greniers A Sel',
    partants: [
      { num: 1, name: 'Tiego The First M4', jockey: 'M. Guyon', weight: '62kg', rope: 'c:8', music: '4p 5p 2p 8p', pmu: (Math.random() * 2 + 8).toFixed(1), ze: '8.4', color: '#1e3a8a' },
      { num: 2, name: 'Gerard Ter Borch H4', jockey: 'A. Hamelin', weight: '61kg', rope: 'c:10', music: '1p 2p 7p 6p', pmu: (Math.random() * 2 + 9).toFixed(1), ze: '10.9', color: '#15803d' },
      { num: 3, name: 'Anssio H4', jockey: 'C. Lecoeuvre', weight: '60.5kg', rope: 'c:5', music: '2p 3p 5p 1p', pmu: (Math.random() * 2 + 7).toFixed(1), ze: '8.0', color: '#047857' }
    ]
  });
});

app.listen(3001, () => console.log('API running on http://localhost:3001'));
