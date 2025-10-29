use('Fatec')

//! Insert One
/*db.pessoas.insertOne({
    "nome": "Vanessa Stockler",
    "CPF":101,
    "UF":"RS",
    "Idade":48,
    "Sexo": "feminino",
    "CNH": 27,
    "Salario": 7500,
    "Ensino Superior": true

});*/

//! Find com or
/*db.pessoas.find(
    {$or:
    [
        {"nome":/Pe/},
        {"nome":/Va/}
    ]}
);*/

//! insert Many

/*db.pessoas.insertMany([
    {"nome": "Fernanda Souza","CPF": 821,"UF": "SP", "Idade": 20, "Sexo": "feminino", "CNH": 331,"Salario": 2500,"Ensino Superior": false},
    {"nome": "Katia Maria", "CPF": 171,"UF": "PR","Idade": 57,"Sexo": "feminino", "Salario": 2100, "Ensino Superior": true},
    {"nome": "Bruno Senna", "CPF": 921,"UF": "SC","Idade": 29, "Sexo": "masculino", "CNH": 431,"Salario": 1100,"Ensino Superior": true},
    {"nome": "Anderson Alves", "CPF": 471,"UF": "SP","Idade": 17, "Sexo": "masculino", "Salario": 800, "Ensino Superior": false}
]);*/


//! updates
/*db.pessoas.update(
    {nome: "Katia Maria"},
    {$set:{UF:"SP"}}
);*/

//checando: db.pessoas.find({"nome":/Kat/});

/*db.pessoas.update(
    {nome: "Fernanda Souza"},
    {$set:{Salario:12170}}
);*/

//! update many
/*db.pessoas.updateMany(
    {Salario:{$lte:2000}},
    {$set:{ Salario:4000}}
);*/
/*db.pessoas.updateMany(
    {"Ensino Superior":true},
    {$set:{UF:"SP"}}
)*/

db.pessoas.updateMany(
    {"UF":"SP", "Ensino Superior":true},
    {$set:{Salario:8700}}
)
