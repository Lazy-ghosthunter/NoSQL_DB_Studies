import pandas as pd
from  pymongo import MongoClient

#* conectando com o Mongo
'''client = MongoClient("mongodb://localhost:27017")
db = client["Teste"]
collection = db["Baseball"]

try:
    df = pd.read_csv("MLBaseball_All_Star_Game.csv")

    collection.insert_many(df.to_dict(orient="records"))

    print("Sucesso!! :D")

except Exception as e:
    print(f"Erro na importação: {e}")

finally:
    client.close()'''


