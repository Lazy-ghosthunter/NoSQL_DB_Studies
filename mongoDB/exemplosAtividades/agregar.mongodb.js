use('Fatec')

//exemplo 1
db.informatica.aggregate([
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
]).projection({_id:0});