const PORT = 3000;

const app = require('./src/app');

app.listen(PORT, () => { 
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});