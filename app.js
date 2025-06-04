const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'welcome.html');
  res.sendFile(filePath);
});


app.get('/etudiant/:id', function(req, res){

  const {id} = req.params;

  const etudiants = [

    {
        "id" : 1 ,
        "name" : "Alain",
        "age" : 22 
    },
    {
        "id" : 2 ,
        "name" : "Céline",
        "age" : 40 
    }
  ];

  const etudiant = etudiants.find(function(e){
    return e.id === parseInt(id) ;
  })

  res.json(etudiant);

})

const serveur = app.listen(80 , function(){ console.log("serveur express start") });

module.exports = serveur ;