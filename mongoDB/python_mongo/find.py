from  pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["Fatec"]
collection = db["NBA"]

def search_mongo(field, value):
    query = {field:{"$regex": value, "$options": "i"}}
    results = collection.find(query)
    return list(results)

try:
    print("Pesquisar no NBA")
    campo = input("Digite o nome do campo: ")
    valor = input("Digite o valor: ")

    resultado = search_mongo(campo, valor)
    print("Resultado da pesquisa: ")
    for doc in resultado:
        print(doc)
except Exception as e:
    print(f"Erro na importação: {e}")