from  pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["Fatec"]
collection = db["NBA"]

def search_mongo(field, value):
    query = {field:{"$regex": value, "$options": "i"}}
    results = collection.find(query)
    return list(results)

def update_mongo(field, old_value, new_value):
    query= {field:{"$regex": old_value,  "$options": "i"}}
    update = {"$set": {field: new_value}}
    result = collection.update_many(query, update)
    return result.modified_count

print("Pesquisar no NBA")
campo = input("Digite o nome do campo: ")
valor = input("Digite o valor: ")

resultado = search_mongo(campo, valor)
print("Resultado da pesquisa: ")
for doc in resultado:
    print(doc)

if resultado:
    novo_valor = input(f"Digite o novo valor para {campo}: ")
    mod_count = update_mongo(campo, valor, novo_valor)
    print(f'{mod_count} documento(s) atualizado(s).')

    resultado_atualizado = search_mongo(campo, novo_valor)
    print("Resultado após atualização")
    for doc in resultado_atualizado:
        print(doc)
else:
    print("Nenhum doc encontrado! :(")
