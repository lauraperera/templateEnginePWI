const express = require("express")
const app = express()
const port = 8085

//templates engine
app.set('view engine', 'ejs')
//indica onde estao os arquivos estaticos
app.use(express.static("public"))

//body-parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//rotas
//rota/view principal-> / 
app.get("/", function(req, res){
    //rebnderizar a pagina
    res.render("index") //essa pagina vai ser inserida em views
})

//rota de cadastro dentro da rota principal
app.get("/cadastro", function(req, res){
    res.render("cadastro")
})

//recebe as infos do cadastro anterior
app.post("/listar_cadastro", function(req, res){
    res.send(`Nome completo: ${req.body.nome} ${req.body.sobrenome} <br> E-mail: ${req.body.email}`)
})


//abre servidor
app.listen(port, function(){
    //aqui o servidor tá aberto
    console.log("Servidor rodando...")
})