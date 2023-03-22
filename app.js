
const express = require('express');
const path = require('path');
const app = express();

const cancionAPIRoutes = require('./routes/cancionAPIRoutes');
const generoAPIRoutes = require('./routes/generoAPIRoutes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/cancion', cancionAPIRoutes);

app.use('/genero', generoAPIRoutes);

app.listen(process.env.PORT || 3000, () => console.log('server activo |°°| 3000'));