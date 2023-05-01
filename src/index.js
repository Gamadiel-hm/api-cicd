import express from 'express';

const app = express();

app.get('/', (eq, res) => {
  res.json({ ok: 200 });
});

app.listen(3000, () => console.log('Server listo en puerto 3000'));
