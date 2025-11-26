use('Fatec');

/*db.cadastroPessoas.aggregate([
    {
        $lookup: {
          from: "produtosInformatica",
          localField: "Material",
          foreignField: "Material",
          as: "Materiais_Comprados"
        }
    },
    {
        $project: {
          _id:0,
          Email:0,
          Endereço:0,
          Telefone:0,
          Idade:0,
        }
    },
    {
        $sort: {
            Nome: 1,
        }
    }
]);*/

//! -------------------------------------------------

/*db.informatica.aggregate([
    {
        $lookup: {
          from: "produtosInformatica",
          localField: "Material",
          foreignField: "Material",
          as: "Materiais_Comprados"
        }
    },
    {
        $sort:{
            Material:1
        }
    }
]);*/

//! -------------------------------------------------

/*db.cadastroPessoas.aggregate([
    {
        $lookup: {
          from: "produtosInformatica",
          localField: "Material",
          foreignField: "Material",
          as: "Materiais_Comprados"
        }
    },
    {
        $lookup: {
          from: "informatica",
          localField: "Material",
          foreignField: "Material",
          as: "Em_Estoque"
        }
    },
    {
        $unwind: {
          path: "$Materiais_Comprados",
        }
    },
    {
        $unwind: {
          path: "$Em_Estoque",
        }
    }
]);*/

//! -------------------------------------------------

/*db.produtosInformatica.aggregate([
    {
        $lookup: {
          from: "cadastroPessoas",
          localField: "Material",
          foreignField: "Material",
          as: "Materiais_Comprados"
        }
    },
    {
        $lookup: {
          from: "informatica",
          localField: "Material",
          foreignField: "Material",
          as: "Em_Estoque"
        }
    },
    {
        $unwind: "$Materiais_Comprados"
    },
    {
        $unwind: "$Em_Estoque"
    }
]);*/

//! -------------------------------------------------

/*db.produtosInformatica.aggregate([
    {
        $lookup: {
          from: "cadastroPessoas",
          localField: "Material",
          foreignField: "Material",
          as: "Materiais_Comprados"
        }
    },
    {
        $lookup: {
          from: "informatica",
          localField: "Material",
          foreignField: "Material",
          as: "Em_Estoque"
        }
    },
    {$unwind: "$Materiais_Comprados"},
    {$unwind: "$Em_Estoque" },
    {
        $match:{
            "Em_Estoque.Data":{ $regex: "23/11/2021"}
        }
    }
]);*/

//! -------------------------------------------------

db.cadastroPessoas.aggregate([
    {
        $lookup: {
          from: "informatica",
          localField: "Material",
          foreignField: "Material",
          as: "Compras"
        }
    },
    {
        $unwind: "$Compras"
    },
    {
        $group: {
          _id: "$Nome",
          TotalCompras: {
            $sum: { $toDouble: "$Compras.Preço"}
          }
        }
    },
    {
        $project:{
            Nome: "$_id",
            TotalCompras: "$TotalCompras",
            _id: 0
        }
    },
    {
        $sort:{
            Nome: 1
        }
    }
]);

//! -------------------------------------------------

