var express    = require("express");
var mysql      = require('mysql');
var bodyParser  = require('body-parser');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'despesas'
});
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
var erroPadrao = {'message': 'Parâmetros do EndPoint com erro!', 'status' : 403};

connection.connect(function(err){
    if(!err) {

        console.log("Database conectado ... \n\n");
    } else {
        console.log("Erro ao conectar ... \n\n");
    }
});

//consulta tabela
app.get("/despesa",function(req,res){
    connection.query('SELECT * FROM despesas.ent_desp;', function(err, rows, fields) {
        res.json(rows);
    }); 
    console.log(res.json(rows));
});

//inserir 
app.post('/inserir/ent_desp', function(req,res){

    var data = req.body;
    var nome = data.nome;

      if (nome != "") {

         var sql = 'INSERT INTO `despesas`.`ent_desp` (`despesa_ent`,`valor_ent`) VALUES (\''+nome+'\');';
         connection.query(sql ,
         function(err, rows, fields) {

            if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de usuarios', 'sql': sql});
                  } else {
                      res.json(rows);
                    }
            });

            } else {
                console.log("ERROR");
            }
});


//listar despesas
app.get('/listar/despesa', function(req,res){

    var data = req.body;
    var nome = data.nome;

      //if (nome != "") {

         var sql = 'SELECT * FROM `ent_desp`;';
         connection.query(sql ,
         function(err, rows, fields) {

            if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de usuarios', 'sql': sql});
                  } else {
                      res.json(rows);
                    }
            });
            // } else {
            //     console.log("ERROR");
            // }

            return sql;
});


//listar entrada caixa
app.get('/listar_cx/despesa', function(req,res){

    var data = req.body;
    var nome = data.nome;

      //if (nome != "") {

         var sql = 'SELECT * FROM `ent_caixa`;';
         connection.query(sql ,
         function(err, rows, fields) {

            if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de usuarios', 'sql': sql});
                  } else {
                      res.json(rows);
                    }
            });
            // } else {
            //     console.log("ERROR");
            // }

            return sql;
});

app.listen(3000);
