import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

// جلب برنامج سباقات اليوم الرسمية من PMU
app.get('/api/pmu/today', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const response = await axios.get(`https://offline.pmu.fr/programme/${today}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'تعذر جلب البيانات الرسمية من PMU' });
  }
});

app.listen(3001, () => console.log('سيرفر PMU الحي يعمل على Port 3001'));
