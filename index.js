const express = require('express');
const server = express();
const {PORT} = require('./config/index');
const {HomeRoutes} = require('./routes');
const {NotFound} = require('./middlewares')



server.use(express.static('./public'));
// midleware intermediario entre las peticiones.
server.use(express.json());
server.use('/', HomeRoutes);
server.use( NotFound);


server.listen(PORT, () => {
    console.log(`app corriendo bajo el puerto ${PORT}`);
})