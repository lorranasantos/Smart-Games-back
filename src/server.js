const app = require("./app");

//Porta servidor http
const PORT = 3333;

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});