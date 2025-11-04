import pandas as pd
from  pymongo import MongoClient

#* conectando com o Mongo
client = MongoClient("mongodb://localhost:27017")
'''db = client["Teste"]
collection = db["Baseball"]

try:
    df = pd.read_csv("MLBaseball_All_Star_Game.csv")

    collection.insert_many(df.to_dict(orient="records"))

    df = pd.read_csv("metrosp_stations.csv")
    collection

    print("Sucesso!! :D")

except Exception as e:
    print(f"Erro na importação: {e}")

finally:
    client.close()
    
'''

#! inserindo o metrosp no mogo 
'''db = client["SaoPaulo"]
collection = db["metroSP"]

csv_file ='metrosp_stations.csv'
data = pd.read_csv(csv_file)


data_dict = data.to_dict('records')

collection.insert_many(data_dict)
print("Dados inseridos")'''



#* Find na collection NBA
db = client["Fatec"]
collection = db['NBA']

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





