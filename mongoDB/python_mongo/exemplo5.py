from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['Fatec']

def delete_collection(collection_name):
    collection = db[collection_name]
    collection.drop()
    print(f"Coleção '{collection_name}' excluída com sucesso.")

def delete_database(database_name):
    client.drop_database(database_name)
    print(f"Banco de dados '{database_name}' excluído com sucesso.")

print("O que você fazer?")
print("1. Excluir uma coleção")
print("2. Excluir um banco de dados")

acao = input("Digitar o número da ação desejada: ")
if acao == '1':
    colecao = input("Digite o nome da coleção a ser excluída: ")
    delete_collection(colecao)
elif acao == '2':
    banco = input("Digite o nome do banco de dados a ser excluído: ")
    delete_database(banco)
else:
    print("Ação inválida.")