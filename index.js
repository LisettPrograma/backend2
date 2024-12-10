import express from 'express'
import gatitoRoutes from './routes/gatitoRoutes.js'
import mascotaRoutes from './routes/mascotaRoutes.js'

const app = express();
app.use(express.json());
app.use(gatitoRoutes);
app.use(mascotaRoutes);

app.listen(3000, 'localhost', () => {
    console.log('Servidor escuchando al puerto 3000');
})