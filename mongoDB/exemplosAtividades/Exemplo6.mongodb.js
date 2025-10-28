use('Fatec');
db.getCollection('Pokemon').insertMany([{

  "#":1,
  "Name":"Ana",
  "Type 1":"Ghost",
  "Type 2":"Fairy",
  "Total":420,
  "HP":70,
  "Attack":180,
  "Defense":300,
  "SP":{
    "Atk":230,
    "Def":145
  },
  "Speed":50,
  "Generation":1,
  "Legendary":true

}])