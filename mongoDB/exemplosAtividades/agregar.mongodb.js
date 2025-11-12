use('Fatec')

//! exemplo 1
/*db.informatica.aggregate([
    {
        $addFields: {
          dataISO: {$dateFromString:{dateString:"$Data", format: "%d/%m/%Y"}}
        }
    },
    {
        $match:{
            dataISO:{
                $gte: ISODate("2023-01-01T00:00:00Z"),
                $lte: ISODate("2023-12-31T23:59:59Z")
            }
        }
    }
]).projection({_id:0});*/

//! Exemplo 2
/*db.informatica.aggregate([
    {
        $group:{
            _id:"$Marca",
            totalPreco:{$sum:"$Preço"}
        }
    },
    {
        $sort:{totalPreco:1}
    }
])*/

//! Exemplo 3
/*db.informatica.aggregate([
    {
        $group:{
            _id: "$Material",
            totalPreco:{$sum:"$Preço"}
        }
    },
    {
        $sort: {
          _id: 1
        }
    }
])*/

//! Exemplo 4
/*db.informatica.aggregate([
    {
        $addFields:{
            valorTotal:{$multiply:["$Quantidade", "$Preço"]}
        }
    },
    {
        $sort:{Marca:1}
    }
]).projection({_id:0})*/

//! Exemplo 5
db.informatica.aggregate([
    {
        $addFields: {
          DataISO:{
            $dateFromString:{
                dateString:"$Data", format:"%d/%m/%Y"
            }
          }
        }
    },
    {
        $match: {
          DataISO:{
            $gte: ISODate("2024-01-01T00:00:00Z"),
            $lte: ISODate("2024-12-31T23:59:59Z")
          }
        }
    }
])
