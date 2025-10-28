use('Fatec');
db.Pokemon.updateOne(
  {Name: "Ana"},
  {$set:{Total:730}}
)