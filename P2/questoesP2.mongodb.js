use('P2');

/*db.audi.aggregate([
    {$group:{_id: '$model', Total:{ $sum: '$price'}}},
    {$sort:{_id:1}}
])*/

/*db.audi.aggregate([
    {$group:{_id: '$engineSize', Total:{ $sum: '$price'}}},
   */

/*db.audi.updateOne({engineSize:0}, {$get:{engineSize:8}})*/

/*db.audi.aggregate([
    {$match:{ year:{ $gte:2018, $lte:2020}}},
    {$group:{_id: '$model', TotalModelo:{ $sum: '$price'}}},
    {$sort:{_id:1}}
])*/

/*db.audi.aggregate([
    {$match:{engineSize:{ $gt:1.4, $lt:1.6}}},
    {$group:{_id: '$model', TotalModelo:{ $sum: '$price'}}},
    {$sort:{_id:1}}
])*/

/*db.audi.aggregate([
    {$match:{engineSize:{ $gt:3, $lt:4}}},
    {$group:{_id: '$model', TotalModelo:{ $sum: '$price'}}},
    {$sort:{_id:1}}
])*/

/*db.audi.aggregate([
    {$match:{price:{ $gt:80000, $lt:90000}}},
    {$group:{_id: '$model', TotalTax:{ $sum: '$tax'}}},
    {$sort:{_id:1}}
])*/

/*db.audi.aggregate([
    {$match:{price:{ $gt:10000, $lt:15000}}},
    {$group:{_id: '$transmission', TotalKM:{ $sum: '$mileage'}}},
    {$sort:{_id:1}}
])*/

/*db.doces.insertMany([
    {"_doces": 1, "Descrição": "Brigadeiro", "Preço":2},
    {"_doces": 2, "Descrição": "Cocada", "Preço":3},
    {"_doces": 3, "Descrição": "Bombom", "Preço":2},
    {"_doces": 4, "Descrição": "Bolo", "Preço":1},
])

db.clientes.insertMany([
    {"_cli": 1, "Nome": "Renata", "UF":"SP"},
    {"_cli": 2, "Nome": "Raquel", "UF":"SC"},
    {"_cli": 3, "Nome": "Elaine", "UF":"PR"},
    {"_cli": 4, "Nome": "Gislene", "UF":"PR"},
    {"_cli": 5, "Nome": "Luciana", "UF":"RS"},
])
*/

/*db.doces.aggregate([
    {$lookup: {
      from: "clientes",
      localField: "_doces",
      foreignField: "_cli",
      as: "doce"
    }}   
])*/

/*db.ruas.insertMany([
    {"_rua": 1, "Avenida": "Aguia de Haia", "Numero":2983},
    {"_rua": 2, "Avenida": "Paulista", "Numero":77},
    {"_rua": 3, "Rua": "Santa Efigenia", "Numero":7},
    {"_rua": 4, "Rua": "direita", "Numero":5},
])

db.cep.insertMany([
    {"_cep": 1, "CEP": "03694000"},
    {"_cep": 2, "CEP": "04444000"},
    {"_cep": 3, "CEP": "04745800"},
    {"_cep": 4, "CEP": "15781001"},
    {"_cep": 5, "CEP": "25815101"},
    {"_cep": 6, "CEP": "35815401"}
])*/

/*db.ruas.aggregate([
    {$lookup: {
      from: "cep",
      localField: "_rua",
      foreignField: "_cep",
      as: "cepRua"
    }} 
])*/

/*db.nomes.insertMany([
    {"_nome": "Renata", "Avenida": "Aguia de Haia", "Numero": 2983},
    {"_nome": "Luciana", "Avenida": "Paulista", "Numero": 77},
    {"_nome": "Gislene", "Rua": "Santa Efigenia", "Numero": 7},
    {"_nome": "Renata", "Rua": "direita", "Numero": 5},
])

db.empregados.insertMany([
    {"_emp": "Raquel", "cargo": "Desenvolvedora Full Stack"},
    {"_emp": "Gislene", "cargo": "Desenvolvedora Back End"},
    {"_emp": "Luciana", "cargo": "DBA"},
    {"_emp": "Renata", "cargo": "Progamadora Senior Python e DJANGO"},
    {"_emp": "Raquel", "cargo": "Gerente de Security"},
    {"_emp": "Raquel", "cargo": "Engenheira de Software"}
])*/

/*db.empregados.aggregate([
    {
        $lookup:{
            from:"nomes",
            localField: "_emp",
            foreignField: "_nome",
            as: "Cargos"
        }
    }
])*/

/*db.paises.insertMany([
    { "_pais": "Brasil", "Localizacao": "America do Sul", "Lingua": "Portuguesa" },
    { "_pais": "USA", "Localizacao": "America do Norte", "Lingua": "Inglesa" },
    { "_pais": "Japao", "Localizacao": "Continente Asiatico", "Lingua": "Japones" },
    { "_pais": "Canada", "Localizacao": "America do Norte", "Lingua": "Ingles e Frances" }
])
db.pessoas.insertMany([
    { "_pes": "Raquel", "cargo": "Desenvolvedora Full Stack", "Nacionalidade": "Brasil" },
    { "_pes": "Gislene", "cargo": "Desenvolvedora Back End", "Nacionalidade": "USA" },
    { "_pes": "Luciana", "cargo": "DBA", "Nacionalidade": "Japao" },
    { "_pes": "Renata", "cargo": "Programadora Senior Python e DJANGO", "Nacionalidade": "Canada" },
    { "_pes": "Gislene", "cargo": "Gerente de Security", "Nacionalidade": "USA" },
    { "_pes": "Luciana", "cargo": "Engenheira de Software", "Nacionalidade": "Japao" }
])
db.paises.aggregate([
    {
        $lookup:
        {
            from: "pessoas",
            localField: "_pais",
            foreignField: "Nacionalidade",
            as: "Origem:"
        }
    }
])*/

/*db.toyota.find({"transmission": "Manual"}).projection({_id:0, model:1, price:1, fuelType:1}).sort({model:1})
*/

/*db.toyota.aggregate([
    {$group:{_id: '$model', Total:{ $sum: '$price'}}},
    {$sort:{_id:1}}
])*/

/*db.cinema.aggregate([
    {$lookup:{
        from:"cinefolo",
        localField:"cin",
        foreignField:"cin",
        as: "Pessoas_cinemas"
    }
},
{
    $project:{_id:0}
}
])*/

/*db.cinefolo.aggregate([
    {$lookup:{
        from:"filme",
        localField:"cin",
        foreignField:"fil",
        as: "Pessoas_cinemas"
    }
},
{
    $project:{_id:0}
},
{
    $sort:{
        Nome:1
    }
}
])*/

db.cinefolo.aggregate([
    {
        $lookup: {
            from: "filme",
            localField: "cin",
            foreignField: "fil",
            as: "Cinemas_Filmes"
        }
    },
    {
        $lookup: {
            from: "restaurante",
            localField: "cin",
            foreignField: "cin",
            as: "Restaurante_cinemas"
        }
    },
    {
        $unwind: {
          path: "$Restaurante_cinemas",
          preserveNullAndEmptyArrays: true
        }
    },
    {
        $sort: { "Restaurante_cinemas.nome":1}
    }
])