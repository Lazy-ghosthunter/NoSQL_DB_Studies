//exclusivo do mongoDB
//noSQL != sem nenhum relacionamento (tipo grafo é praticamente 100% relacionamentos)

//tipo o join do sql

//no mongo não usa o fk, mas sim qualquer valor atributo em comun, um id em comum
//"$lookup"

use('quitanda');

/*db.pedidos.aggregate([
    {
        "$lookup":{
            from:"estoque",
            localField: "Item",
            foreignField: "Descrição",
            as: "inventario_final"
        }
    },
    {
        $project: {
          _id:0
        }
    }
])*/
//! ----------------------------------------
/*db.estoque.aggregate([
    {
        "$lookup":{
            from:"pedidos",
            localField: "Descrição",
            foreignField: "Item",
            as: "inventario_final"
        }
    },
    {
        $project: {
          _id:0
        }
    }
])*/

//! -------------------------------------

/*db.estoque.aggregate([
    {
        $lookup:{
            from: "pedidos",
            localField: "Descrição",
            foreignField: "Item",
            as: "inventario_final"
        }
    },
    {
        $match:{ Descrição: "Espinafre"}
    },
    {
        $project: {_id:0}
    }
])*/

//! ------------------------------------------

/*db.estoque.aggregate([
    {
        $lookup:{
            from: "pedidos",
            localField: "Descrição",
            foreignField: "Item",
            as: "inventario_final"
        }
    },
    {
        $match:{ Descrição: "Abacaxi"}
    },
    {
        $project: {_id:0}
    }
])*/

//! ----------------------------------------------

/*db.estoque.aggregate([
    {
        $lookup:{
            from: "pedidos",
            localField: "Descrição",
            foreignField: "Item",
            as: "inventario_final"
        }
    },
    {
        $match:{
            $or:[
                {Descrição:"Abacaxi"},
                {Descrição:"Maçã"}
            ]
        }
    {
        $project: {_id:0}
    }
])*/

//! --------------------------------------------
/*db.pedidos.aggregate([
    {
        $lookup: {
            from: "estoque",
            localField: "Item",
            foreignField: "Descrição",
            as: "inventario_final"
        }
    },
    {
        $match: {
            $and: [
                { Item: "Maçã" },
                { Quantidade: { $gt: 18 } }
            ]
        }
    },
    {
        $project:{_id:0}
    }
]);*/

//! --------------------------------------------

/*db.estoque.aggregate([
    {
        $lookup: {
          from: "pedidos",
          localField: "Descrição",
          foreignField: "Item",
          as: "inventario_final"
        }
    },
    {
        $match:{
            Descrição:{
                $not:{
                    $eq: "Abacaxi"
                }
            }
        }
    },
    {
        $project: {
          _id:0
        }
    }
])*/

//! --------------------------------------------

/*db.pedidos.aggregate([
    {
        $match:{
            Item: {
                $in: ["Abacaxi", "Maçã"]
            }
        }
    },
    {
        $group:{
            _id:null,
            Soma_Preco:{ $sum:"$Preço (R$)"}
        }
    },
    {
        $project: {
          _id:0,
          Soma_Preco: 1
        }
    }
]);*/

//! --------------------------------------------
/*db.estoque.aggregate([
    {
        $count: "total_itens"
    }
])*/

//! --------------------------------------------

/*db.pedidos.aggregate([
    {
        $match:{Item: { $in:["Cebola", "Tomate"]}}
    },
    {
        $group:{
            _id: "$Item",
            total_quantidade:{$sum: "$Quantidade"},
            preco_medio: {$avg: "$Preço (R$)"}
        }
    },
    {
        $merge:{
            into: "QuitandaOutubro",
            on: "_id",
            whenMatched: "merge",
            whenNotMatched: "insert"
        }
    }
])*/

//! --------------------------------------

/*db.pedidos.aggregate([
    {
        $group:{
            _id: "$Item",
            total_quantidade: { $sum: "$Quantidade"},
            preco_medio: {$avg: "$Preço (R$)"}
        }
    },
    {
        $out: "QuitandaResumo"
    }
])*/